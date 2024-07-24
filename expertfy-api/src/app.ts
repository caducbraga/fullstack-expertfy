//FOR ALL ROUTES
import server from './server'
import mysql from "mysql2/promise";
import dotenv from "dotenv";
import { connection } from './data/connection'

//USER AREA
import personRouter from './presentation/routers/personRouter'
import { personRepositoryImpl } from './domain/respositories/personRepository'
import { PersonDataSourceImpl } from './data/data-sources/personDataSource';
//use-cases
import { getAllPersonUseCaseImpl } from './domain/use-cases/person/getAllPerson'
import { createPersonUseCaseImpl } from './domain/use-cases/person/createPerson'
import { updatePersonUseCaseImpl } from './domain/use-cases/person/updatePerson'
import { deletePersonUseCaseImpl } from './domain/use-cases/person/deletePerson'
import { getPersonByIdUseCaseImpl } from './domain/use-cases/person/getPersonById'
import { getPersonAccountInfoUseCaseImpl } from './domain/use-cases/person/getPersonAccountInfo'

//ADVANCED SEARCH AREA
import { AreaDataSourceImpl } from './data/data-sources/areaDataSource';
import { areaRepositoryImpl } from './domain/respositories/areaRepository';
import { getAllAreasUseCaseImpl } from './domain/use-cases/area/getAllArea';

import { LanguageDataSourceImpl } from './data/data-sources/languageDataSource';
import { languageRepositoryImpl } from './domain/respositories/languageRepository';
import { getAllLanguagesUseCaseImpl } from './domain/use-cases/language/getAllLanguage';

import { SeniorityDataSourceImpl } from './data/data-sources/seniorityDataSource';
import { seniorityRepositoryImpl } from './domain/respositories/seniorityRepository';
import { getAllSeniorityUseCaseImpl } from './domain/use-cases/seniority/getAllArea';
import areaRouter from './presentation/routers/areaRouter';
import languageRouter from './presentation/routers/languageRouter';
import seniorityRouter from './presentation/routers/seniorityRouter';

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
  const personDS = await getMSQL_DS(PersonDataSourceImpl)

  const personMiddleWare = personRouter(
    new getAllPersonUseCaseImpl(new personRepositoryImpl(personDS)),
    new createPersonUseCaseImpl(new personRepositoryImpl(personDS)),
    new updatePersonUseCaseImpl(new personRepositoryImpl(personDS)),
    new deletePersonUseCaseImpl(new personRepositoryImpl(personDS)),
    new getPersonByIdUseCaseImpl(new personRepositoryImpl(personDS)),
    new getPersonAccountInfoUseCaseImpl(new personRepositoryImpl(personDS)),
  )

  //New routes for advanced search

  const areaDS = await getMSQL_DS(AreaDataSourceImpl)
  const languageDS = await getMSQL_DS(LanguageDataSourceImpl)
  const seniorityDS = await getMSQL_DS(SeniorityDataSourceImpl)
  const areaMiddleWare = areaRouter(new getAllAreasUseCaseImpl(new areaRepositoryImpl(areaDS)))
  const languageMiddleWare = languageRouter(new getAllLanguagesUseCaseImpl(new languageRepositoryImpl(languageDS)))
  const seniorityMiddleWare = seniorityRouter(new getAllSeniorityUseCaseImpl(new seniorityRepositoryImpl(seniorityDS)))

  server.use("/area", areaMiddleWare)
  server.use("/language", languageMiddleWare)
  server.use("/seniority", seniorityMiddleWare)
  server.use("/person", personMiddleWare)
  server.get("/", (req, res) => res.send("This is our API!"))
  server.listen(3000, () => console.log("Running on http://localhost:3000"))

})()