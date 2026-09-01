import { createClient } from "https://esm.sh/@supabase/supabase-js@2.58.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const OWNER_EMAIL = "ssai55030@gmail.com";

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !subject || !message) {
      return new Response(JSON.stringify({ error: "All fields are required." }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email))) {
      return new Response(JSON.stringify({ error: "Please enter a valid email address." }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const trim = (v: unknown, max: number) => String(v).slice(0, max);
    const payload = {
      name: trim(name, 120),
      email: trim(email, 200),
      subject: trim(subject, 200),
      message: trim(message, 5000),
    };

    // Always persist the enquiry so nothing is ever lost.
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
    );
    const { error: dbError } = await supabase.from("contact_messages").insert(payload);
    if (dbError) console.error("Failed to store contact message:", dbError.message);

    // Best-effort email notification (requires RESEND_API_KEY).
    let emailed = false;
    const resendKey = Deno.env.get("RESEND_API_KEY");
    if (resendKey) {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: Deno.env.get("CONTACT_FROM_EMAIL") ?? "Portfolio <onboarding@resend.dev>",
          to: [OWNER_EMAIL],
          reply_to: payload.email,
          subject: `Portfolio enquiry: ${payload.subject}`,
          html: `
            <h2>New message from your portfolio</h2>
            <p><strong>Name:</strong> ${payload.name}</p>
            <p><strong>Email:</strong> ${payload.email}</p>
            <p><strong>Subject:</strong> ${payload.subject}</p>
            <p><strong>Message:</strong></p>
            <p style="white-space:pre-wrap">${payload.message}</p>
          `,
        }),
      });
      emailed = res.ok;
      if (!res.ok) console.error("Resend error:", await res.text());
    }

    if (dbError && !emailed) {
      return new Response(
        JSON.stringify({ error: "Could not deliver your message. Please email me directly." }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    return new Response(JSON.stringify({ success: true, emailed }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("send-contact-message error:", err);
    return new Response(JSON.stringify({ error: "Unexpected error. Please try again." }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
