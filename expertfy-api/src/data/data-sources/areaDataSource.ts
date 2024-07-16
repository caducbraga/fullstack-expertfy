import { SimpleListModel } from "./models/simple.list.model"
import { areaDataSource } from "../interfaces/data-sources/areaDataSource";
import mysql, { RowDataPacket } from "mysql2/promise";

const areaTable = "area";

export class areaDataSourceImpl implements areaDataSource {
  private db: mysql.Connection;

  constructor(db: mysql.Connection) {
    this.db = db;
  }

  public async getAllAreas(): Promise<SimpleListModel[]> {
    try {
      const [rows, fields] = await this.db.query(`SELECT * FROM ${areaTable}`);
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
