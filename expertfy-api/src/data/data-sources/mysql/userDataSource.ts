import { userModel } from "../../../domain/models/userModel";
import { expertListModel } from "../../../domain/models/expertListModel";
import { userDataSource } from "../../interfaces/data-sources/userDataSource";
import mysql, { RowDataPacket } from "mysql2/promise";

const userTable = "user";
const manifestTable = "manifestcompetence";

export class userDataSourceImpl implements userDataSource {
  private db: mysql.Connection;

  constructor(db: mysql.Connection) {
    this.db = db;
  }

  public async createUser(user: userModel): Promise<boolean> {
    try {
      const query = `INSERT INTO ${userTable} 
        (login, password, seniority, employmentStartDate, languages, phone, email, linkedin, name, lastName, birthDate, photo) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
  
      const values = [
        user.login,
        user.password,
        user.seniority,
        user.employmentStartDate,
        JSON.stringify(user.languages), 
        user.phone,
        user.email,
        user.linkedin,
        user.name,
        user.lastName,
        user.birthDate,
        user.photo, // Use o valor da imagem diretamente
      ];
  
      const [rows, fields] = await this.db.query(query, values);
  
      if (Array.isArray(rows)) {
        const newrows = rows as RowDataPacket[];
        const id = newrows[0].id;
        return true;
      }
  
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
  

  public async updateUser(id: string, user: userModel): Promise<boolean> {
    try {
      const query = `UPDATE ${userTable} SET
        login=?, password=?, seniority=?, employmentStartDate=?, languages=?, 
        phone=?, email=?, linkedin=?, name=?, lastName=?, birthDate=?, photo=?
        WHERE id=?`;
  
      const values = [
        user.login,
        user.password,
        user.seniority,
        user.employmentStartDate,
        JSON.stringify(user.languages), 
        user.phone,
        user.email,
        user.linkedin,
        user.name,
        user.lastName,
        user.birthDate,
        user.photo, 
        id, 
      ];
  
      const [rows, fields] = await this.db.query(query, values);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
  
  public async deleteUser(id: string): Promise<boolean> {
    try {
      const query = `DELETE FROM ${userTable} WHERE id=?`;
      const [rows, fields] = await this.db.query(query, [id]);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
  
  public async getUserById(id: string): Promise<userModel> {
    try {
      const query = `SELECT * FROM ${userTable} WHERE id=?`;
      const [rows, fields] = await this.db.query(query, [id]);
  
      if (Array.isArray(rows)) {
        const newrows = rows as RowDataPacket[];
        const user = newrows[0] as userModel; 
        return user;
      }
      return {} as userModel;
    } catch (error) {
      console.log(error);
      return {} as userModel;
    }
  }
  
  public async getAllUsers(): Promise<userModel[]> {
    const query = `SELECT * FROM ${userTable}`;
    
    try {
      const [rows, fields] = await this.db.query(query);

      if (Array.isArray(rows)){
        const newrows = rows as RowDataPacket[];
        const users = newrows as userModel[];
        return users;
      }

    } catch (error) {
      console.log(error);
      return [] as userModel[];
    }
    return [];
  }


  public async getUsersAndCountByCompetenceId(competenceId: string): Promise<expertListModel[]> {
    try {
      const query = `
      SELECT
        users.*,
        (SELECT COUNT(*) FROM ${manifestTable} WHERE userId = users.id AND competenceId = '${competenceId}') AS competenceCount
      FROM ${userTable} users
      WHERE users.id IN (SELECT userId FROM ${manifestTable} WHERE competenceId = '${competenceId}')
      ORDER BY competenceCount DESC;
    `;
      const [rows, fields] = await this.db.query(query);
      
      if (Array.isArray(rows)) {
        const newrows = rows as RowDataPacket[];
        const users: expertListModel[] = newrows.map((row: RowDataPacket) => {
          const user: expertListModel = {
            id: row.id,
            login: row.login,
            password: row.password,
            seniority: row.seniority,
            employmentStartDate: row.employmentStartDate,
            languages: row.languages,
            phone: row.phone,
            email: row.email,
            linkedin: row.linkedin,
            name: row.name,
            lastName: row.lastName,
            birthDate: row.birthDate,
            competenceCount: row.competenceCount || 0,
            photo: row.photo,
          };
          return user;
        });
  
        return users;
      }
      return [] as expertListModel[];
    } catch (error) {
      console.log(error);
      return [] as expertListModel[];
    }
  }
  
}