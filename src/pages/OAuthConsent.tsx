import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";

type OAuthClient = { name?: string; redirect_uri?: string };
type AuthorizationDetails = {
  client?: OAuthClient;
  scope?: string;
  scopes?: string[];
  redirect_url?: string;
  redirect_to?: string;
};

type OAuthNamespace = {
  getAuthorizationDetails: (id: string) => Promise<{ data: AuthorizationDetails | null; error: { message: string } | null }>;
  approveAuthorization: (id: string) => Promise<{ data: AuthorizationDetails | null; error: { message: string } | null }>;
  denyAuthorization: (id: string) => Promise<{ data: AuthorizationDetails | null; error: { message: string } | null }>;
};

const oauth = () => (supabase.auth as unknown as { oauth: OAuthNamespace }).oauth;

const scopeLabel = (scope: string) => {
  if (scope === "openid") return "Verify your identity";
  if (scope === "email") return "Share your email address";
  if (scope === "profile") return "Share your basic profile";
  return `Additional permission requested: ${scope}`;
};

const OAuthConsent = () => {
  const [params] = useSearchParams();
  const authorizationId = params.get("authorization_id") ?? "";
  const [details, setDetails] = useState<AuthorizationDetails | null>(null);
  const [account, setAccount] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    let active = true;
    (async () => {
      if (!authorizationId) {
        setError("Missing authorization_id");
        return;
      }
      const { data: sess } = await supabase.auth.getSession();
      if (!sess.session) {
        const next = window.location.pathname + window.location.search;
        window.location.href = `/auth?next=${encodeURIComponent(next)}`;
        return;
      }
      setAccount(sess.session.user.email ?? null);
      const { data, error: detailsError } = await oauth().getAuthorizationDetails(authorizationId);
      if (!active) return;
      if (detailsError) {
        setError(detailsError.message);
        return;
      }
      const immediate = data?.redirect_url ?? data?.redirect_to;
      if (immediate && !data?.client) {
        window.location.href = immediate;
        return;
      }
      setDetails(data);
    })();
    return () => {
      active = false;
    };
  }, [authorizationId]);

  const decide = async (approve: boolean) => {
    setBusy(true);
    const { data, error: decisionError } = approve
      ? await oauth().approveAuthorization(authorizationId)
      : await oauth().denyAuthorization(authorizationId);
    if (decisionError) {
      setBusy(false);
      setError(decisionError.message);
      return;
    }
    const target = data?.redirect_url ?? data?.redirect_to;
    if (!target) {
      setBusy(false);
      setError("No redirect returned by the authorization server.");
      return;
    }
    window.location.href = target;
  };

  const shell = (children: React.ReactNode) => (
    <main className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="w-full max-w-md rounded-lg border border-border bg-card p-6 shadow-sm">{children}</div>
    </main>
  );

  if (error) {
    return shell(
      <>
        <h1 className="text-xl font-semibold text-foreground">Authorization request failed</h1>
        <p className="mt-2 text-sm text-muted-foreground">{error}</p>
      </>,
    );
  }

  if (!details) return shell(<p className="text-sm text-muted-foreground">Loading…</p>);

  const clientName = details.client?.name ?? "an app";
  const scopes = details.scopes ?? (details.scope ? details.scope.split(/\s+/).filter(Boolean) : []);

  return shell(
    <>
      <h1 className="text-xl font-semibold text-foreground">Connect {clientName} to this portfolio</h1>
      {account && <p className="mt-1 text-sm text-muted-foreground">Signed in as {account}</p>}
      <p className="mt-4 text-sm text-foreground">
        {clientName} will be able to call this app's enabled tools while you are signed in.
      </p>
      {details.client?.redirect_uri && (
        <p className="mt-2 break-all text-xs text-muted-foreground">Redirects to {details.client.redirect_uri}</p>
      )}
      {scopes.length > 0 && (
        <ul className="mt-4 space-y-1 text-sm text-muted-foreground">
          {scopes.map((scope) => (
            <li key={scope}>• {scopeLabel(scope)}</li>
          ))}
        </ul>
      )}
      <p className="mt-4 text-xs text-muted-foreground">
        This does not bypass this app's permissions or backend policies.
      </p>
      <div className="mt-6 flex gap-3">
        <Button className="flex-1" disabled={busy} onClick={() => decide(true)}>
          Approve
        </Button>
        <Button variant="outline" className="flex-1" disabled={busy} onClick={() => decide(false)}>
          Cancel connection
        </Button>
      </div>
    </>,
  );
};

export default OAuthConsent;
