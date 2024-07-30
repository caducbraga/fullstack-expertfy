import { HumanTaskModel } from "./models/human.task.model";
import { HumanTaskDataSource } from "../interfaces/data-sources/humanTaskDataSource";
import mysql, { RowDataPacket } from "mysql2/promise";

const humanTaskTable = "human_task";
//TODO: Implement data source when database is ready
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
  public async updateHumanTask(id: string, taskOut: HumanTaskModel): Promise<boolean>;
  public async deleteHumanTask(id: string): Promise<boolean>;
  public async getHumanTaskById(id: string): Promise<HumanTaskModel>;
  public async getAllHumanTasks(): Promise<HumanTaskModel[]>;
}