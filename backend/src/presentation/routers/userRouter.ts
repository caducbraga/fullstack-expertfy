import express from 'express'
import { Request, Response } from "express";
import { userController } from "../../controllers/userController"
import { getAllUserUseCase } from "../../domain/interfaces/use-cases/user/getAllUser";
import { createUserUseCase } from "../../domain/interfaces/use-cases/user/createUser";
import { updateUserUseCase } from "../../domain/interfaces/use-cases/user/updateUser";
import { deleteUserUseCase } from "../../domain/interfaces/use-cases/user/deleteUser";
import { getUserByIdUseCase } from "../../domain/interfaces/use-cases/user/getUserById";

export default function userRouter(
  getAllUserUseCase: getAllUserUseCase,
  createUserUseCase: createUserUseCase,
  updateUserUseCase: updateUserUseCase,
  deleteUserUseCase: deleteUserUseCase,
  getUserByIdUseCase: getUserByIdUseCase
) {

  const router = express.Router();

  router.get("/", async (req: Request, res: Response) => {
    try {
      
      const users = await getAllUserUseCase.execute();
      console.log(users)
      res.status(200).send(users);
    } catch (error) {
      res.status(500).send({ error: "error fetching data", message: error });
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

  return router;
}
// router.get("/user/:id", userController.getById);
// router.post("/user", userController.create);
// router.put("/user/:id", userController.update);
// router.delete("/user/:id", userController.delete);

