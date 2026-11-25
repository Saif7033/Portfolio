import { NextResponse } from "next/server";
import { pool } from "@/lib/db";

export async function GET() {
  try {
    const result = await pool.query(
      "SELECT id, slug, title FROM public.projects ORDER BY display_order ASC LIMIT 1;"
    );
    return NextResponse.json({
      status: "connected",
      sample: result.rows[0] ?? null,
    });
  } catch (error) {
    return NextResponse.json(
      {
        status: "error",
        message: error instanceof Error ? error.message : "Database connection failed",
      },
      { status: 500 }
    );
  }
}
