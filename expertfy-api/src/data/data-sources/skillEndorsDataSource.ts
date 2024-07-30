import { SkillEndorsementModel } from "./models/skill.endorsement.model";
import { SkillEndorsDataSource } from "../interfaces/data-sources/skillEndorsDataSource";
import mysql, { RowDataPacket } from "mysql2/promise";


const skillEndorsementTable = "skill_endors";
export class SkillEndorsDataSourceImpl implements SkillEndorsDataSource {

  private db: mysql.Connection;

  constructor(db: mysql.Connection) {
    this.db = db;
  }

  public async createSkillEndors(endors: SkillEndorsementModel): Promise<boolean>{
    try {
      const query = `INSERT INTO ${skillEndorsementTable}
      (personId, skillId, description, date)
      VALUES (?, ?, ?, ?)`;

      const values = [
        endors.personId,
        endors.skillId,
        endors.description,
        endors.date
      ];

      const [rows] = await this.db.execute<RowDataPacket[]>(
        query,
        values
      );
      return true;

    } catch (error) {
      console.log(error);
      return false;
    }
  }
  public async updateSkillEndors(id: string, endors: SkillEndorsementModel): Promise<boolean>{
    try {
      const query = `UPDATE ${skillEndorsementTable} SET
      personId=?, skillId=?, description=?, date=?
      WHERE id=?`;

      const values = [
        endors.personId,
        endors.skillId,
        endors.description,
        endors.date,
        id
      ];

      const [rows] = await this.db.execute<RowDataPacket[]>(
        query,
        values
      );
      return true;

    } catch (error) {
      console.log(error);
      return false;
    }
  }
  public async deleteSkillEndors(id: string): Promise<boolean>{
    try {
      const query = `DELETE FROM ${skillEndorsementTable} WHERE id=?`;

      const [rows] = await this.db.execute<RowDataPacket[]>(
        query,
        [id]
      );
      return true;

    } catch (error) {
      console.log(error);
      return false;
    }
  }
  public async getSkillByIdEndors(id: string): Promise<SkillEndorsementModel>{
    try {
      const query = `SELECT * FROM ${skillEndorsementTable} WHERE id=?`;

      const [rows] = await this.db.execute<RowDataPacket[]>(
        query,
        [id]
      );
      if(rows && rows.length > 0){
        return rows[0] as SkillEndorsementModel;
      }
      return {} as SkillEndorsementModel;
    } catch (error) {
      console.log(error);
      return {} as SkillEndorsementModel;
    }
  }
  public async getAllSkillsEndors(): Promise<SkillEndorsementModel[]>{
    try {
      const query = `SELECT * FROM ${skillEndorsementTable}`;

      const [rows] = await this.db.execute<RowDataPacket[]>(
        query
      );
      if(rows && rows.length > 0){
        return rows as SkillEndorsementModel[];
      }
      return [] as SkillEndorsementModel[];

    } catch (error) {
      console.log(error);
      return [] as SkillEndorsementModel[];
    }
  }
}