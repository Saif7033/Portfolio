import { pool, type Project } from "@/lib/db";
import { ProjectsGrid } from "./ProjectsGrid";

export async function ProjectsDataFetcher() {
  let projects: Project[] = [];

  try {
    const result = await pool.query(
      `SELECT * FROM public.projects 
       WHERE featured = TRUE 
       ORDER BY display_order ASC, created_at DESC;`
    );
    projects = result.rows;
  } catch (err) {
    console.error("Error querying projects from database:", err);
    // Fallback gracefully to empty array if query fails
    projects = [];
  }

  return <ProjectsGrid projects={projects} />;
}
