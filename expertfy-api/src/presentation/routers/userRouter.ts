import express from 'express'
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

  router.post("/", async (req: Request, res: Response) => {
    try {
      const newUser = await createUserUseCase.execute(req.body);
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
      res.status(200).send(users);
    } catch (error) {
      res.status(500).send({ error: "error fetching data", message: error });
    }
  });

  return router;
}


