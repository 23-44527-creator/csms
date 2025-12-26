import { pool } from "./db.js";

export default async function handler(req, res) {
  const result = await pool.query("SELECT * FROM users ORDER BY id DESC");
  res.json(result.rows);
}
