import express from "express";
import server from './server'
import userRouter from './presentation/routers/userRouter'
import { connection } from './data/connection'
import { getAllUserUseCaseImpl } from './domain/use-cases/user/getAllUser'
import { createUserUseCaseImpl } from './domain/use-cases/user/createUser'
import { updateUserUseCaseImpl } from './domain/use-cases/user/updateUser'
import { deleteUserUseCaseImpl } from './domain/use-cases/user/deleteUser'
import { getUserByIdUseCaseImpl } from './domain/use-cases/user/getUserById'
import { userRepositoryImpl } from './domain/respositories/userRepository'


import mysql from "mysql2/promise";
import dotenv from "dotenv";
import { userDataSourceImpl } from "./data/data-sources/mysql/userDataSource";

dotenv.config();
const { MYSQL_HOST, MYSQL_DB, MYSQL_USER, MYSQL_PASSWORD } = process.env;

async function getPGDS() {
  const db = mysql.createPool({
    host: MYSQL_HOST,
    database: MYSQL_DB,
    user: MYSQL_USER,
    password: MYSQL_PASSWORD,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  });

  return new userDataSourceImpl(db)
}

(async () => {
  const dataSource = await getPGDS()

  const userMiddleWare = userRouter(
    new getAllUserUseCaseImpl(new userRepositoryImpl(dataSource)),
    new createUserUseCaseImpl(new userRepositoryImpl(dataSource)),
    new updateUserUseCaseImpl(new userRepositoryImpl(dataSource)),
    new deleteUserUseCaseImpl(new userRepositoryImpl(dataSource)),
    new getUserByIdUseCaseImpl(new userRepositoryImpl(dataSource)),
  )

  server.use("/user", userMiddleWare)
  server.get("/", (req, res) => res.send("Hello World"))
  server.listen(3000, () => console.log("Running on http://localhost:3000"))

})()