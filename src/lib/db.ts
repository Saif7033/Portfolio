import { Pool } from "pg";

const globalForPg = globalThis as unknown as { pool: Pool };

export const pool =
  globalForPg.pool ||
  new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false },
  });

if (process.env.NODE_ENV !== "production") {
  globalForPg.pool = pool;
}

export interface Project {
  id: number | string;
  slug: string;
  title: string;
  tagline: string;
  summary_markdown: string;
  category: string;
  tech_stack: string[];
  live_url: string | null;
  github_url: string;
  metrics: string;
  featured: boolean;
  display_order: number;
  created_at?: string;
  updated_at?: string;
}
