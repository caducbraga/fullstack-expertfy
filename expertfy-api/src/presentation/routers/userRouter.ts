import express from 'express'
import multer from 'multer';
import { Request, Response } from "express";
import { getAllUserUseCase } from "../../domain/interfaces/use-cases/user/getAllUser";
import { createUserUseCase } from "../../domain/interfaces/use-cases/user/createUser";
import { updateUserUseCase } from "../../domain/interfaces/use-cases/user/updateUser";
import { deleteUserUseCase } from "../../domain/interfaces/use-cases/user/deleteUser";
import { getUserByIdUseCase } from "../../domain/interfaces/use-cases/user/getUserById";
import { getUsersAndCountByCompetenceIdUseCase } from "../../domain/interfaces/use-cases/user/getUsersAndCountByCompetenceId";

export default function userRouter(
  getAllUserUseCase: getAllUserUseCase,
  createUserUseCase: createUserUseCase,
  updateUserUseCase: updateUserUseCase,
  deleteUserUseCase: deleteUserUseCase,
  getUserByIdUseCase: getUserByIdUseCase,
  getAllUserByCompetenceIdUseCase: getUsersAndCountByCompetenceIdUseCase
) {

  const router = express.Router();
  const storage = multer.memoryStorage();
  const upload = multer({ storage: storage });

  router.get("/", async (req: Request, res: Response) => {
    try {
      
      const users = await getAllUserUseCase.execute();
      res.status(200).send(users);
    } catch (error) {
      res.status(500).send({ error: "error fetching data", message: error });
    }
  });

  router.get("/:id", async (req: Request, res: Response) => {
    try {
      const user = await getUserByIdUseCase.execute(req.params.id);
      res.status(200).send(user);
    } catch (error) {
      res.status(500).send({ error: "error fetching data" , message: error});
    }
  });

  router.post("/", upload.single("photo"), async (req, res) => {
    try {
      const user = req.body;
      if(req.file) {
        user.photo = req.file;
      }
      const newUser = await createUserUseCase.execute(user);
      res.status(200).send(newUser);
    } catch (error) {
      res.status(500).send({ error: "error saving data" , message: error});
    }
  });

  router.put("/:id", async (req: Request, res: Response) => {
    try {
      const updatedUser = await updateUserUseCase.execute(req.params.id, req.body);
      res.status(200).send(updatedUser);
    } catch (error) {
      res.status(500).send({ error: "error updating data" , message: error});
    }
  });

  router.delete("/:id", async (req: Request, res: Response) => {
    try {
      const deletedUser = await deleteUserUseCase.execute(req.params.id);
      res.status(200).send(deletedUser);
    } catch (error) {
      res.status(500).send({ error: "error deleting data" , message: error});
    }
  });

  router.get("/listAllByCompetenceId/:id", async (req: Request, res: Response) => {
    try {
      const users = await getAllUserByCompetenceIdUseCase.execute(req.params.id);
      console.log(users);
      res.status(200).send(users);
    } catch (error) {
      res.status(500).send({ error: "error fetching data", message: error });
    }
  });

  router.post('/withImage', async (req: Request, res: Response) => {
    try {
      // Extraia os dados do usuário do corpo da solicitação
      const userData = req.body;

      // Verifique se um arquivo de imagem foi enviado
      if (!req.file) {
        return res.status(400).send({ error: 'Imagem ausente' });
      }

      // A imagem está no buffer (req.file.buffer)
      const userImage = req.file.buffer;

      // Inclua a imagem nos dados do usuário
      userData.photo = userImage;

      // Crie o novo usuário com a imagem
      const newUser = await createUserUseCase.execute(userData);

      res.status(200).send(newUser);
    } catch (error) {
      res.status(500).send({ error: 'Erro ao criar usuário com imagem', message: error });
    }
  });

  return router;
}


