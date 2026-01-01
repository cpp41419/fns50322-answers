import "dotenv/config";
import pg from "pg";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATABASE_URL =
  process.env.DATABASE_URL ||
  "postgres://postgres.ruugjiyowuwnscryewyg:RcltOPt7338OO7Dw@aws-0-us-east-1.pooler.supabase.com:5432/postgres?sslmode=require";

async function runSchema() {
  console.log("🗄️  Running database schema...\n");

  const client = new pg.Client({
    connectionString: DATABASE_URL,
    ssl: {
      rejectUnauthorized: false,
    },
  });

  // Disable SSL verification for development
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

  try {
    await client.connect();
    console.log("✅ Connected to database\n");

    // Read schema file
    const schemaPath = path.join(__dirname, "..", "supabase", "schema.sql");
    const schema = fs.readFileSync(schemaPath, "utf8");

    // Execute schema
    await client.query(schema);
    console.log("✅ Schema executed successfully!\n");

    // Verify tables exist
    const result = await client.query(`
      SELECT table_name
      FROM information_schema.tables
      WHERE table_schema = 'public'
      AND table_name IN ('categories', 'questions', 'submitted_questions')
    `);

    console.log("📋 Tables created:");
    result.rows.forEach((row) => {
      console.log(`   - ${row.table_name}`);
    });
    console.log("");
  } catch (error) {
    console.error("❌ Error running schema:", error);
    process.exit(1);
  } finally {
    await client.end();
  }
}

runSchema();
