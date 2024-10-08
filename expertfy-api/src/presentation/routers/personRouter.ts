import express from 'express'
import { Request, Response } from "express";
import { GetAllPersonUseCase } from "../../domain/interfaces/use-cases/person/getAllPerson";
import { CreatePersonUseCase } from "../../domain/interfaces/use-cases/person/createPerson";
import { UpdatePersonUseCase } from "../../domain/interfaces/use-cases/person/updatePerson";
import { DeletePersonUseCase } from "../../domain/interfaces/use-cases/person/deletePerson";
import { GetPersonByIdUseCase } from "../../domain/interfaces/use-cases/person/getPersonById";
import { GetPersonAccountInfoUseCaseImpl } from '../../domain/use-cases/person/getPersonAccountInfo';
import { GetPersonListBySkillTypeIdUseCaseImpl } from '../../domain/use-cases/person/getPersonListBySkillTypeId';
import { GetSkillIdByPersonAndSkillTypeUseCaseImpl } from '../../domain/use-cases/person/getSkillIdByPersonAndSkillType';

export default function personRouter(
  getAllPersonUseCase: GetAllPersonUseCase,
  createPersonUseCase: CreatePersonUseCase,
  updatePersonUseCase: UpdatePersonUseCase,
  deletePersonUseCase: DeletePersonUseCase,
  getPersonByIdUseCase: GetPersonByIdUseCase,
  getPersonAccountInfoUseCaseImpl: GetPersonAccountInfoUseCaseImpl,
  getPersonListBySkillTypeIdUseCaseImpl: GetPersonListBySkillTypeIdUseCaseImpl,
  getSkillIdByPersonAndSkillTypeUseCaseImpl: GetSkillIdByPersonAndSkillTypeUseCaseImpl

) {

  const router = express.Router();

  router.get("/", async (req: Request, res: Response) => {
    try {
      
      const persons = await getAllPersonUseCase.execute();
      res.status(200).send(persons);
    } catch (error) {
      res.status(500).send({ error: "error fetching data", message: error });
    }
  });

  router.get("/:id", async (req: Request, res: Response) => {
    try {
      const person = await getPersonByIdUseCase.execute(req.params.id);
      res.status(200).send(person);
    } catch (error) {
      res.status(500).send({ error: "error fetching data" , message: error});
    }
  });

  router.post("/", async (req: Request, res: Response) => {
    try {
      const newPerson = await createPersonUseCase.execute(req.body);
      res.status(200).send(newPerson);
    } catch (error) {
      res.status(500).send({ error: "error creating data" , message: error});
    }
  });

  router.put("/:id", async (req: Request, res: Response) => {
    try {
      const updatedPerson = await updatePersonUseCase.execute(req.params.id, req.body);
      res.status(200).send(updatedPerson);
    } catch (error) {
      res.status(500).send({ error: "error updating data" , message: error});
    }
  });

  router.delete("/:id", async (req: Request, res: Response) => {
    try {
      const deletedPerson = await deletePersonUseCase.execute(req.params.id);
      res.status(200).send(deletedPerson);
    } catch (error) {
      res.status(500).send({ error: "error deleting data" , message: error});
    }
  });

  router.get("/accountInfo/:id", async (req: Request, res: Response) => {
    try {
      const accountInfo = await getPersonAccountInfoUseCaseImpl.execute(req.params.id);
      res.status(200).send(accountInfo);
    } catch (error) {
      res.status(500).send({ error: "error fetching data", message: error });
    }
  });

  router.get("/listBySkillTypeId/:id", async (req: Request, res: Response) => {
    try {
      const persons = await getPersonListBySkillTypeIdUseCaseImpl.execute(req.params.id);
      res.status(200).send(persons);
    } catch (error) {
      res.status(500).send({ error: "error fetching data", message: error });
    }
  });

  router.get("/getSkillIdByPersonAndSkillType/:personId/:skillTypeId", async (req: Request, res: Response) => {
    const { personId, skillTypeId } = req.params;
    
    console.log(`Received personId: ${personId}, skillTypeId: ${skillTypeId}`);
    
    if (!personId || !skillTypeId) {
      return res.status(400).send({ error: "Invalid parameters", message: "personId and skillTypeId are required" });
    }
    
    try {
      const skillId = await getSkillIdByPersonAndSkillTypeUseCaseImpl.execute(personId, skillTypeId);
      console.log(`Fetched skillId: ${skillId}`);
      res.status(200).json({ skillId });
    } catch (error: any) {
      console.error("Error fetching data:", error);
      res.status(500).send({ error: "error fetching data", message: error.message || error });
    }
  });

  return router;
}


