// import { App } from "./app";
// import dotenv from "dotenv";

// dotenv.config();

// const PORT = process.env.PORT || 3000;

// new App().server.listen(PORT);

import express from 'express';
const server = express();
server.use(express.json());
export default server