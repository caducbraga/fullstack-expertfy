import express from 'express'
import multer from 'multer';
import { Request, Response } from "express";
import { getAllPersonUseCase } from "../../domain/interfaces/use-cases/person/getAllPerson";
import { createPersonUseCase } from "../../domain/interfaces/use-cases/person/createPerson";
import { updatePersonUseCase } from "../../domain/interfaces/use-cases/person/updatePerson";
import { deletePersonUseCase } from "../../domain/interfaces/use-cases/person/deletePerson";
import { getPersonByIdUseCase } from "../../domain/interfaces/use-cases/person/getPersonById";
import { getPersonAccountInfoUseCaseImpl } from '../../domain/use-cases/person/getPersonAccountInfo';

export default function personRouter(
  getAllPersonUseCase: getAllPersonUseCase,
  createPersonUseCase: createPersonUseCase,
  updatePersonUseCase: updatePersonUseCase,
  deletePersonUseCase: deletePersonUseCase,
  getPersonByIdUseCase: getPersonByIdUseCase,
  getPersonAccountInfoUseCaseImpl: getPersonAccountInfoUseCaseImpl
) {

  const router = express.Router();
  const storage = multer.memoryStorage();
  const upload = multer({ storage: storage });

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

  router.post("/", upload.single("photo"), async (req, res) => {
    try {
      const person = req.body;
      if(req.file) {
        person.photo = req.file;
      }
      const newPerson = await createPersonUseCase.execute(person);
      res.status(200).send(newPerson);
    } catch (error) {
      res.status(500).send({ error: "error saving data" , message: error});
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

  router.post('/withImage', async (req: Request, res: Response) => {
    try {
      // Extraia os dados do usuário do corpo da solicitação
      const personData = req.body;

      // Verifique se um arquivo de imagem foi enviado
      if (!req.file) {
        return res.status(400).send({ error: 'Imagem ausente' });
      }

      // A imagem está no buffer (req.file.buffer)
      const personImage = req.file.buffer;

      // Inclua a imagem nos dados do usuário
      personData.photo = personImage;

      // Crie o novo usuário com a imagem
      const newPerson = await createPersonUseCase.execute(personData);

      res.status(200).send(newPerson);
    } catch (error) {
      res.status(500).send({ error: 'Erro ao criar usuário com imagem', message: error });
    }
  });

  return router;
}


