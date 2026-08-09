import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { projects } from "../portfolio-data";

export default defineTool({
  name: "list_projects",
  title: "List projects",
  description:
    "List the featured portfolio projects, with role, impact, category and technologies. Optionally filter by category or a free-text query.",
  inputSchema: {
    category: z
      .string()
      .optional()
      .describe("Optional category filter, e.g. 'Fintech', 'HealthTech', 'Enterprise SaaS'."),
    query: z
      .string()
      .optional()
      .describe("Optional free-text search across title, description and technologies."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ category, query }) => {
    const needle = query?.trim().toLowerCase();
    const cat = category?.trim().toLowerCase();

    const results = projects.filter((project) => {
      const matchesCategory = !cat || project.category.toLowerCase().includes(cat);
      const haystack = [project.title, project.description, project.role, ...project.technologies]
        .join(" ")
        .toLowerCase();
      const matchesQuery = !needle || haystack.includes(needle);
      return matchesCategory && matchesQuery;
    });

    return {
      content: [{ type: "text", text: JSON.stringify(results, null, 2) }],
      structuredContent: { count: results.length, projects: results },
    };
  },
});
