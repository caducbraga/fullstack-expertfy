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
import { userDataSourceImpl } from "./data/data-sources/mysql/userDataSource";


import mysql from "mysql2/promise";
import dotenv from "dotenv";

import competenceRouter from "./presentation/routers/competenceRouter";
import { createCompetenceUseCaseImpl } from "./domain/use-cases/competence/createCompetence";
import { updateCompetenceUseCaseImpl } from "./domain/use-cases/competence/updateCompetence";
import { deleteCompetenceUseCaseImpl } from "./domain/use-cases/competence/deleteCompetence";
import { getCompetenceByIdUseCaseImpl } from "./domain/use-cases/competence/getCompetenceById";
import { getAllCompetenceUseCaseImpl } from "./domain/use-cases/competence/getAllCompetence";
import { competenceRepositoryImpl } from "./domain/respositories/competenceRepository";
import { competenceDataSourceImpl } from "./data/data-sources/mysql/competenceDataSource";

dotenv.config();
const { MYSQL_HOST, MYSQL_DB, MYSQL_USER, MYSQL_PASSWORD } = process.env;

async function getMSQL_DS(dataSourceClass: any) {
  const db = mysql.createPool({
    host: MYSQL_HOST,
    database: MYSQL_DB,
    user: MYSQL_USER,
    password: MYSQL_PASSWORD,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  });

  return new dataSourceClass(db)
}

(async () => {
  const userDS = await getMSQL_DS(userDataSourceImpl)

  const userMiddleWare = userRouter(
    new getAllUserUseCaseImpl(new userRepositoryImpl(userDS)),
    new createUserUseCaseImpl(new userRepositoryImpl(userDS)),
    new updateUserUseCaseImpl(new userRepositoryImpl(userDS)),
    new deleteUserUseCaseImpl(new userRepositoryImpl(userDS)),
    new getUserByIdUseCaseImpl(new userRepositoryImpl(userDS)),
  )

  const competenceDS = await getMSQL_DS(competenceDataSourceImpl)

  const competenceMiddleWare = competenceRouter(
    new getAllCompetenceUseCaseImpl(new competenceRepositoryImpl(competenceDS)),
    new createCompetenceUseCaseImpl(new competenceRepositoryImpl(competenceDS)),
    new updateCompetenceUseCaseImpl(new competenceRepositoryImpl(competenceDS)),
    new deleteCompetenceUseCaseImpl(new competenceRepositoryImpl(competenceDS)),
    new getCompetenceByIdUseCaseImpl(new competenceRepositoryImpl(competenceDS)),
  )



  server.use("/user", userMiddleWare)
  server.use("/competence", competenceMiddleWare)
  server.get("/", (req, res) => res.send("Hello World"))
  server.listen(3000, () => console.log("Running on http://localhost:3000"))

})()