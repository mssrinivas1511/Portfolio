import { defineTool } from "@lovable.dev/mcp-js";
import { certifications, skillCategories, tools } from "../portfolio-data";

export default defineTool({
  name: "get_skills",
  title: "Get skills and expertise",
  description:
    "Get skill categories with proficiency levels, plus the tools and certifications listed on the portfolio.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const payload = { skillCategories, tools, certifications };
    return {
      content: [{ type: "text", text: JSON.stringify(payload, null, 2) }],
      structuredContent: payload,
    };
  },
});
