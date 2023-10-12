import { competenceModel } from "../../../domain/models/competenceModel";
import { competenceDataSource } from "../../interfaces/data-sources/competenceDataSource";
import mysql, { RowDataPacket } from "mysql2/promise";

const competenceTable = "competence";

export class competenceDataSourceImpl implements competenceDataSource {
  private db: mysql.Connection;

  constructor(db: mysql.Connection) {
    this.db = db;
  }

  public async createCompetence(competence: competenceModel): Promise<boolean> {
    try {
      const [rows, fields] = await this.db.query(`INSERT INTO 
        ${competenceTable} (name, description, type) 
        VALUES (
            '${competence.name}',
            '${competence.description}'
        )`);

      if (Array.isArray(rows)) {
        const newrows = rows as RowDataPacket[];
        const id = newrows[0].id;
        console.log(id);
        return true;
      }
      return true
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  public async updateCompetence(id: string, competence: competenceModel): Promise<boolean> {

    try {
      const [rows, fields] = await this.db.query(`UPDATE ${competenceTable} SET
            name='${competence.name}',
            description='${competence.description}'
            WHERE id='${id}'`);

      if (Array.isArray(rows)) {
        const newrows = rows as RowDataPacket[];
        const id = newrows[0].id;
        console.log(id);
        return true;
      }
      return true
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  public async deleteCompetence(id: string): Promise<boolean> {
    try {
      const [rows, fields] = await this.db.query(`DELETE FROM ${competenceTable} WHERE id='${id}'`);

      if (Array.isArray(rows)) {
        const newrows = rows as RowDataPacket[];
        const id = newrows[0].id;
        console.log(id);
        return true;
      }
      return true
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  public async getCompetenceById(id: string): Promise<competenceModel> {
    try {
      const [rows, fields] = await this.db.query(`SELECT * FROM ${competenceTable} WHERE id='${id}'`);

      if (Array.isArray(rows)) {
        const newrows = rows as RowDataPacket[];
        const competence = newrows[0] as competenceModel;
        return competence;
      }
      return {} as competenceModel;
    } catch (error) {
      console.log(error);
      return {} as competenceModel;
    }
  }

  public async getAllCompetence(): Promise<competenceModel[]> {
    try {
      const [rows, fields] = await this.db.query(`SELECT * FROM ${competenceTable}`);

      if (Array.isArray(rows)) {
        const newrows = rows as RowDataPacket[];
        const competences = newrows as competenceModel[];
        return competences;
      }
      return [] as competenceModel[];
    } catch (error) {
      console.log(error);
      return [] as competenceModel[];
    }
  }

  public async getCompetenceByName(name: string): Promise<competenceModel[]> {
    try {
      const [rows, fields] = await this.db.query(`SELECT * FROM 
      ${competenceTable} WHERE name LIKE '%${name}%'`);

      if (Array.isArray(rows)) {
        const newrows = rows as RowDataPacket[];
        const competences = newrows as competenceModel[];
        return competences;
      }
      return [] as competenceModel[];
    } catch (error) {
      console.log(error);
      return [] as competenceModel[];
    }
  }
}
