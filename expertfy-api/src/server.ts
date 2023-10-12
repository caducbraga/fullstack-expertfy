import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger.json';
//enable cors
import cors from 'cors';



const server = express();
server.use(express.json());
server.use(cors());
server.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument))
export default server