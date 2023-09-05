
console.log('DATABASE_URL:', process.env.POSTGRES_URL);



/*
import pg from "pg";

const { Pool } = pg;

const pool = new Pool({
  connectionString: import.meta.env.VITE_POSTGRES_URL + "?sslmode=require",
});


async function testDatabaseConnection() {
  try {
    const client = await pool.connect();
    console.log("Connected to the database");
    client.release(); // Release the client back to the pool
  } catch (error) {
    console.error("Error connecting to the database:", error);
  } finally {
    // Close the connection pool gracefully
    await pool.end();
  }
}

testDatabaseConnection();
*/
