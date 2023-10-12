import express from "express";
import { Request, Response } from "express";
import { createCompetenceUseCase } from "../../domain/interfaces/use-cases/competence/createCompetence";
import { deleteCompetenceUseCase } from "../../domain/interfaces/use-cases/competence/deleteCompetence";
import { getAllCompetenceUseCase } from "../../domain/interfaces/use-cases/competence/getAllCompetence";
import { getCompetenceByIdUseCase } from "../../domain/interfaces/use-cases/competence/getCompetenceById";
import { updateCompetenceUseCase } from "../../domain/interfaces/use-cases/competence/updateCompetence";

export default function competenceRouter(
  getAllCompetenceUseCase: getAllCompetenceUseCase,
  createCompetenceUseCase: createCompetenceUseCase,
  updateCompetenceUseCase: updateCompetenceUseCase,
  deleteCompetenceUseCase: deleteCompetenceUseCase,
  getCompetenceByIdUseCase: getCompetenceByIdUseCase,
) {

  const router = express.Router();

  router.post('/', async (req: Request, res: Response) => {
    try {
      const newCompetence = await createCompetenceUseCase.execute(req.body);
      res.status(200).send(newCompetence);
    } catch (error) {
      res.status(500).send({ error: "error saving data", message: error });
    }
  });

  router.get('/', async (req: Request, res: Response) => {
    try {
      const competences = await getAllCompetenceUseCase.execute();
      res.status(200).send(competences);
    } catch (error) {
      res.status(500).send({ error: "error fetching data", message: error });
    }
  });

  router.get('/:id', async (req: Request, res: Response) => {
    try {
      const competence = await getCompetenceByIdUseCase.execute(req.params.id);
      res.status(200).send(competence);
    } catch (error) {
      res.status(500).send({ error: "error fetching data", message: error });
    }
  });

  router.put('/:id', async (req: Request, res: Response) => {
    try {
      const updatedCompetence = await updateCompetenceUseCase.execute(req.params.id, req.body);
      res.status(200).send(updatedCompetence);
    } catch (error) {
      res.status(500).send({ error: "error updating data", message: error });
    }
  });

  router.delete('/:id', async (req: Request, res: Response) => {
    try {
      const deletedCompetence = await deleteCompetenceUseCase.execute(req.params.id);
      res.status(200).send(deletedCompetence);
    } catch (error) {
      res.status(500).send({ error: "error deleting data", message: error });
    }
  });

  return router;
}