import { pool } from "./db.js";

export default async function handler(req, res) {
  const users = await pool.query("SELECT COUNT(*) FROM users");
  const products = await pool.query("SELECT COUNT(*) FROM products");
  const orders = await pool.query("SELECT COUNT(*) FROM orders");

  res.json({
    users: users.rows[0].count,
    products: products.rows[0].count,
    orders: orders.rows[0].count,
  });
}
