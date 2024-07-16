import { manifestCompList } from "../../../domain/models/manifestCompList";
import { manifestCompetenceModel } from "../../../domain/models/manifestCompetenceModel"; 
import { manifestCompDataSource } from "../../interfaces/data-sources/manifestCompDataSource";
import mysql, { RowDataPacket } from "mysql2/promise";

const manifestCompTable = "manifestcompetence";
const competenceTable = "competence";

export class manifestCompDataSourceImpl implements manifestCompDataSource {
  private db: mysql.Connection;

  constructor(db: mysql.Connection) {
    this.db = db;
  }

  public async createManifestComp(manifestComp: manifestCompetenceModel): Promise<boolean> {
    try {
      const [rows, fields] = await this.db.query(`INSERT INTO 
        ${manifestCompTable} (timestamp, description, userId, competenceId)
        VALUES (
          '${manifestComp.timestamp}',
          '${manifestComp.description}',
          '${manifestComp.user.id}',
          '${manifestComp.competence.id}',
          '${manifestComp.link}'
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

  public async updateManifestComp(id: string, manifestComp: manifestCompetenceModel): Promise<boolean> {
      
      try {
        const [rows, fields] = await this.db.query(`UPDATE ${manifestCompTable} SET
              id='${manifestComp.id}',
              timestamp='${manifestComp.timestamp}',
              description='${manifestComp.description}',
              userId='${manifestComp.user.id}',
              competenceId='${manifestComp.competence.id}',
              link='${manifestComp.link}'
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

  public async deleteManifestComp(id: string): Promise<boolean> {
    try {
      const [rows, fields] = await this.db.query(`DELETE FROM ${manifestCompTable} WHERE id='${id}'`);

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

  public async getManifestCompById(id: string): Promise<manifestCompetenceModel> {
    try {
      const [rows, fields] = await this.db.query(`SELECT * FROM ${manifestCompTable} WHERE id='${id}'`);
      if (Array.isArray(rows)) {
        const newrows = rows as RowDataPacket[];
        const manifestComp = newrows[0] as manifestCompetenceModel;
        return manifestComp;
      }
      return {} as manifestCompetenceModel;
    } catch (error) {
      console.log(error);
      return {} as manifestCompetenceModel;
    }
  }

  public async getAllManifestComp(): Promise<manifestCompetenceModel[]> {
    try {
      const [rows, fields] = await this.db.query(`SELECT * FROM ${manifestCompTable}`);
      if (Array.isArray(rows)) {
        const newrows = rows as RowDataPacket[];
        const manifestComp = newrows as manifestCompetenceModel[];
        return manifestComp;
      }
      return [] as manifestCompetenceModel[];
    } catch (error) {
      console.log(error);
      return [] as manifestCompetenceModel[];
    }
  }

  public async getAllManifestCompAndCompetenceByUserId(userId: string): Promise<manifestCompList[]> {
    try {
      const [rows, fields] = await this.db.query(`SELECT * FROM ${competenceTable} as c 
      JOIN ${manifestCompTable} as mc ON c.id = mc.competenceId WHERE mc.userId='${userId}'`);
      if (Array.isArray(rows)) {
        const newrows = rows as RowDataPacket[];
        const manifestComp = newrows as manifestCompList[];
        return manifestComp;
      }
      return [] as manifestCompList[];
    } catch (error) {
      console.log(error);
      return [] as manifestCompList[];
    }
  }
}

