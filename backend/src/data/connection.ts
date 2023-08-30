import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();
const { MYSQL_HOST, MYSQL_DB, MYSQL_USER, MYSQL_PASSWORD } = process.env;

export const connection = mysql.createPool({
  host: MYSQL_HOST,
  database: MYSQL_DB,
  user: MYSQL_USER,
  password: MYSQL_PASSWORD,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});