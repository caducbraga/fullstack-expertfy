import { SimpleListModel } from "./models/simple.list.model"
import { seniorityDataSource } from "../interfaces/data-sources/seniorityDataSource"; 
import mysql, { RowDataPacket } from "mysql2/promise";

const seniorityTable = "seniority";

export class seniorityDataSourceImpl implements seniorityDataSource {
  private db: mysql.Connection;

  constructor(db: mysql.Connection) {
    this.db = db;
  }

  public async getAllSeniority(): Promise<SimpleListModel[]> {
    try {
      const [rows, fields] = await this.db.query(`SELECT * FROM ${seniorityTable}`);
      if (Array.isArray(rows)) {
        const newrows = rows as RowDataPacket[];
        const languages = newrows.map((row) => {
          return {
            id: row.id,
            name: row.name,
          } as SimpleListModel;
        });
        return languages;
      }
      return [];
    } catch (error) {
      console.log(error);
      return [];
    }
  }
}
