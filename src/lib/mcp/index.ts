import { defineMcp } from "@lovable.dev/mcp-js";
import getProfileTool from "./tools/get-profile";
import listProjectsTool from "./tools/list-projects";
import getSkillsTool from "./tools/get-skills";
import getContactInfoTool from "./tools/get-contact-info";
import getResumeTool from "./tools/get-resume";

export default defineMcp({
  name: "mssrinivas1511",
  title: "mssrinivas1511",
  version: "0.1.0",
  instructions:
    "Public tools for SrinivaS's product management portfolio. Use `get_profile` for background and expertise, `list_projects` for featured case studies (optionally filtered), `get_skills` for skills, tools and certifications, `get_contact_info` for contact and social links, and `get_resume` for the downloadable resume URL. All data is public portfolio content; there is no private or per-user data.",
  tools: [getProfileTool, listProjectsTool, getSkillsTool, getContactInfoTool, getResumeTool],
});
