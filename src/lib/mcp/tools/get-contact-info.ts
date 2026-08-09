import { defineTool } from "@lovable.dev/mcp-js";
import { contact } from "../portfolio-data";

export default defineTool({
  name: "get_contact_info",
  title: "Get contact info",
  description:
    "Get the public contact details and social profile links published on the portfolio.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(contact, null, 2) }],
    structuredContent: { contact },
  }),
});
