import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import pg from "pg";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, "..", ".env.local") });

const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

async function run() {
  const schemaPath = path.join(__dirname, "..", "supabase", "schema-v2.sql");
  const schema = fs.readFileSync(schemaPath, "utf8");

  const client = await pool.connect();
  try {
    await client.query(schema);
    console.log("✅ Schema v2 applied successfully!");

    // Show created tables
    const result = await client.query(`
      SELECT table_name
      FROM information_schema.tables
      WHERE table_schema = 'public'
      ORDER BY table_name
    `);
    console.log("\n📋 Tables in database:");
    result.rows.forEach(row => console.log(`   - ${row.table_name}`));

  } catch (err) {
    console.error("Error:", err);
  } finally {
    client.release();
    await pool.end();
  }
}

run();
