import express from "express";
import { Request, Response } from "express";
import { getAllSeniorityUseCase } from "../../domain/interfaces/use-cases/seniority/getAllSeniority";

export default function seniorityRouter(
  getAllSeniorityUseCase: getAllSeniorityUseCase
) {

  const router = express.Router();

  router.get("/", async (req: Request, res: Response) => {
    try {
      const seniorities = await getAllSeniorityUseCase.getAllSeniority();
      res.status(200).send(seniorities);
    } catch (error) {
      res.status(500).send({ error: "error fetching data", message: error });
    }
  });

  return router;
}