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

  public async createUser(user: userModel) : Promise<boolean>{
    try {
      const [rows, fields] = await this.db.query(`INSERT INTO 
      ${userTable} (login, password, role, seniority, employmentStartDate, languages, phone, email, linkedin, name, lastName, birthDate) 
      VALUES (
        '${user.login}',
        '${user.password}',
        '${user.role}',
        '${user.seniority}',
        '${user.employmentStartDate}',
        '${user.languages}',
        '${user.phone}',
        '${user.email}',
        '${user.linkedin}',
        '${user.name}',
        '${user.lastName}',
        '${user.birthDate}'
      )`);

      if (Array.isArray(rows)) {
        const newrows = rows as RowDataPacket[];
        const id = newrows[0].id;
        return true;
      }
      return true
    } catch (error) {
      console.log(error);
      return false;
    } 
  }

  public async updateUser(id: string, user: userModel): Promise<boolean>{

    try {
      const [rows, fields] = await this.db.query(`UPDATE ${userTable} SET
      login='${user.login}',
      password='${user.password}',
      role='${user.role}',
      seniority='${user.seniority}',
      employmentStartDate='${user.employmentStartDate}',
      languages='${user.languages}',
      phone='${user.phone}',
      email='${user.email}',
      linkedin='${user.linkedin}',
      name='${user.name}',
      lastName='${user.lastName}',
      birthDate='${user.birthDate}'
      WHERE id='${id}'`);
      return true;
    }
    catch (error) {
      console.log(error);
      return false;
    }
  }

  public async deleteUser(id: string): Promise<boolean> {
    try {
      const [rows, fields] = await this.db.query(`DELETE FROM ${userTable} WHERE id='${id}'`);
      return true;
    }
    catch (error) {
      console.log(error);
      return false;
    }
  }

  public async getUserById(id: string): Promise<userModel>{
    try {
      const [rows, fields] = await this.db.query(`SELECT * FROM ${userTable} WHERE id='${id}'`);
      if (Array.isArray(rows)) {
        const newrows = rows as RowDataPacket[];
        const user: userModel = {
            id: newrows[0].id,
            login: newrows[0].login,
            password: newrows[0].password,
            role: newrows[0].role,
            seniority: newrows[0].seniority,
            employmentStartDate: newrows[0].employmentStartDate,
            languages: newrows[0].languages,
            phone: newrows[0].phone,
            email: newrows[0].email,
            linkedin: newrows[0].linkedin,
            name: newrows[0].name,
            lastName: newrows[0].lastName,
            birthDate: newrows[0].birthDate
        };
        return user;
      }
      return {} as userModel;
    }
    catch (error) {
      console.log(error);
      return {} as userModel;
    }
  }

  public async getAllUsers(): Promise<userModel[]>{
    
    const [rows, fields] = await this.db.query(`SELECT * FROM ${userTable}`);

    if (Array.isArray(rows)) {
      const newrows = rows as RowDataPacket[];
      const users: userModel[] = newrows.map((row: RowDataPacket) => {
          return {
              id: row.id,
              login: row.login,
              password: row.password,
              role: row.role,
              seniority: row.seniority,
              employmentStartDate: row.employmentStartDate,
              languages: row.languages,
              phone: row.phone,
              email: row.email,
              linkedin: row.linkedin,
              name: row.name,
              lastName: row.lastName,
              birthDate: row.birthDate
          };
      });

      return users;
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
            role: row.role,
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