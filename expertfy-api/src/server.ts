// import { App } from "./app";
// import dotenv from "dotenv";

// dotenv.config();

// const PORT = process.env.PORT || 3000;

// new App().server.listen(PORT);

import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger.json';

const server = express();
server.use(express.json());
server.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument))
export default server