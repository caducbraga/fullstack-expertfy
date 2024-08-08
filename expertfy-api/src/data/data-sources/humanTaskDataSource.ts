import { HumanTaskModel } from "./models/human.task.model";
import { HumanTaskDataSource } from "../interfaces/data-sources/humanTaskDataSource";
import mysql, { RowDataPacket } from "mysql2/promise";

const humanTaskTable = "human_task";

export class HumanTaskDataSourceImpl implements HumanTaskDataSource {
  private db: mysql.Connection;

  constructor(db: mysql.Connection) {
    this.db = db;
  }

  public async createHumanTask(taskOut: HumanTaskModel): Promise<boolean>{
    try {
      const query = `INSERT INTO ${humanTaskTable} 
      (skillId, taskOutputId, taskType) VALUES (?, ?, ?)`;

      const values = [
        taskOut.skillId,
        taskOut.taskOutputId,
        taskOut.taskType,
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
  public async updateHumanTask(id: string, humanTask: HumanTaskModel): Promise<boolean>{
    try {
      const query = `UPDATE ${humanTaskTable} SET
      skillId=?, taskOutputId=?, taskType=? WHERE id=?`;

      const values = [
        humanTask.skillId,
        humanTask.taskOutputId,
        humanTask.taskType,
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
  public async deleteHumanTask(id: string): Promise<boolean>{
    try {
      const query = `DELETE FROM ${humanTaskTable} WHERE id=?`;
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
  public async getHumanTaskById(id: string): Promise<HumanTaskModel>{
    try {
      const query = `SELECT * FROM ${humanTaskTable} WHERE id=?`;
      const [rows] = await this.db.execute<RowDataPacket[]>(
        query,
        [id]
      );
      return rows[0] as HumanTaskModel;

    } catch (error) {
      console.log(error);
      return {} as HumanTaskModel;
    }
  }
  public async getAllHumanTasks(): Promise<HumanTaskModel[]>{
    try {
      const query = `SELECT * FROM ${humanTaskTable}`;
      const [rows] = await this.db.execute<RowDataPacket[]>(
        query
      );

      if (rows && rows.length > 0)
        return rows as HumanTaskModel[];

      return [] as HumanTaskModel[];
    } catch (error) {
      console.log(error);
      return [] as HumanTaskModel[];
    }
  }
}