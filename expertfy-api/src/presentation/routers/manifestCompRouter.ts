import express from "express";
import { Request, Response } from "express";
import { createManifestCompUseCase } from "../../domain/interfaces/use-cases/manifestComp/createManifestComp";
import { deleteManifestCompUseCase } from "../../domain/interfaces/use-cases/manifestComp/deleteManifestComp";
import { getAllManifestCompUseCase } from "../../domain/interfaces/use-cases/manifestComp/getAllManifestComp";
import { getManifestCompByIdUseCase } from "../../domain/interfaces/use-cases/manifestComp/getManifestCompById";
import { updateManifestCompUseCase } from "../../domain/interfaces/use-cases/manifestComp/updateManifestComp";
import { getAllManifestCompAndCompetenceUseCase } from "../../domain/interfaces/use-cases/manifestComp/getAllManifestCompAndCompetence";

export default function manifestCompRouter(
  getAllManifestCompUseCase: getAllManifestCompUseCase,
  createManifestCompUseCase: createManifestCompUseCase,
  updatedManifestCompUseCase: updateManifestCompUseCase,
  deleteManifestCompUseCase: deleteManifestCompUseCase,
  getManifestCompByIdUseCase: getManifestCompByIdUseCase,
  getAllManifestCompAndCompetenceUseCase: getAllManifestCompAndCompetenceUseCase,
) {
  const router = express.Router();

  router.post("/", async (req: Request, res: Response) => {
    try {
      const newManifestComp = await createManifestCompUseCase.execute(req.body);
      res.status(200).send(newManifestComp);
    } catch (error) {
      res.status(500).send({ error: "error saving data", message: error });
    }
  });

  router.get("/", async (req: Request, res: Response) => {
    try {
      const manifestComp = await getAllManifestCompUseCase.execute();
      res.status(200).send(manifestComp);
    } catch (error) {
      res.status(500).send({ error: "error fetching data", message: error });
    }
  });

  router.get("/:id", async (req: Request, res: Response) => {
    try {
      const manifestComp = await getManifestCompByIdUseCase.execute(req.params.id);
      res.status(200).send(manifestComp);
    } catch (error) {
      res.status(500).send({ error: "error fetching data", message: error });
    }
  });

  router.put("/:id", async (req: Request, res: Response) => {
    try {
      const updatedManifestComp = await updatedManifestCompUseCase.execute(req.params.id, req.body);
      res.status(200).send(updatedManifestComp);
    } catch (error) {
      res.status(500).send({ error: "error updating data", message: error });
    }
  });

  router.delete("/:id", async (req: Request, res: Response) => {
    try {
      const deletedManifestComp = await deleteManifestCompUseCase.execute(req.params.id);
      res.status(200).send(deletedManifestComp);
    } catch (error) {
      res.status(500).send({ error: "error deleting data", message: error });
    }
  });

  router.get("/user/:userId", async (req: Request, res: Response) => {
    try {
      const manifestCompAndCompetence = await getAllManifestCompAndCompetenceUseCase.execute(req.params.userId);
      res.status(200).send(manifestCompAndCompetence);
    } catch (error) {
      res.status(500).send({ error: "error fetching data", message: error });
    }
  });

  return router;
}