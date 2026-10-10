import { defineTool } from "@lovable.dev/mcp-js";
import { profile } from "../portfolio-data";

export default defineTool({
  name: "get_profile",
  title: "Get profile",
  description:
    "Get the portfolio owner's public profile: name, title, location, summary, core expertise and headline achievements.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const result = {
      ...profile,
      coreExpertise: [...profile.coreExpertise],
      achievements: profile.achievements.map((achievement) => ({ ...achievement })),
    };
    return {
      content: [{ type: "text", text: JSON.stringify(result, null, 2) }],
      structuredContent: { profile: result },
    };
  },
});
