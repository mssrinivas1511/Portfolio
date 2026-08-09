import { defineTool } from "@lovable.dev/mcp-js";
import { profile } from "../portfolio-data";

export default defineTool({
  name: "get_resume",
  title: "Get resume link",
  description: "Get the path to the portfolio owner's downloadable resume (PDF).",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [
      {
        type: "text",
        text: `Resume (PDF) is available at ${profile.resumeUrl} on the portfolio site.`,
      },
    ],
    structuredContent: { resumeUrl: profile.resumeUrl },
  }),
});
