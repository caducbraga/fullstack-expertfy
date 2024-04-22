import express from "express";
import { Request, Response } from "express";
import { getAllAreasUseCase } from "../../domain/interfaces/use-cases/area/getAllArea";

export default function areaRouter(
  getAllAreasUseCase: getAllAreasUseCase
) {

  const router = express.Router();

  router.get("/", async (req: Request, res: Response) => {
    try {
      const areas = await getAllAreasUseCase.getAllAreas();
      res.status(200).send(areas);
    } catch (error) {
      res.status(500).send({ error: "error fetching data", message: error });
    }
  });

  return router;
}