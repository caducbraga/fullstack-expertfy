import { userModel } from "../../../domain/models/userModel";
import { userDataSource } from "../../interfaces/data-sources/userDataSource";
import { sqlDbWrapper } from "../../interfaces/data-sources/sqlDbWrapper";
import mysql, { RowDataPacket } from "mysql2/promise";

const userTable = "user";
export class userDataSourceImpl implements userDataSource {
  private db: mysql.Connection;

  constructor(db: mysql.Connection) {
    this.db = db;
  }

  public async createUser(user: userModel){
    const result = await this.db.query(`INSERT INTO 
    ${userTable} (login, password, role, seniority, timeInCompany, languages, phone, email, linkedin, name, lastName, dateBorn) 
    VALUES (
      '${user.login}',
      '${user.password}',
      '${user.role}',
      '${user.seniority}',
      '${user.timeInCompany}',
      '${user.languages}',
      '${user.phone}',
      '${user.email}',
      '${user.linkedin}',
      '${user.name}',
      '${user.lastName}',
      '${user.dateBorn}'
    ) RETURNING id`, (err: any, result: any) => {
      if (err) {
        console.log(err);
        return false;
      }
      console.log(result);
      return true;
      }
    );
    
    return true;
  }

  public async updateUser(id: string, user: userModel): Promise<boolean>{
    await this.db.query(`UPDATE ${userTable} SET
    login='${user.login}',
    password='${user.password}',
    role='${user.role}',
    seniority='${user.seniority}',
    timeInCompany='${user.timeInCompany}',
    languages='${user.languages}',
    phone='${user.phone}',
    email='${user.email}',
    linkedin='${user.linkedin}',
    name='${user.name}',
    lastName='${user.lastName}',
    dateBorn='${user.dateBorn}'
    WHERE id='${user.id}'`);

    return true;
  }

  public async deleteUser(id: string): Promise<boolean> {
    await this.db.query(`DELETE FROM ${userTable} WHERE id=?`, [id]);
    return true;
  }

  public async getUserById(id: string): Promise<userModel>{
    const dbResponse = await this.db.query(`SELECT * FROM ${userTable} WHERE id=?`, [id]);
    // const user = dbResponse.rows.map(item => ({
    //   id: item.id,
    //   login: item.login,
    //   password: item.password,
    //   role: item.role,
    //   seniority: item.seniority,
    //   timeInCompany: item.timeInCompany,
    //   languages: item.languages,
    //   phone: item.phone,
    //   email: item.email,
    //   linkedin: item.linkedin,
    //   name: item.name,
    //   lastName: item.lastName,
    //   dateBorn: item.dateBorn
    // }));

    const today: Date = new Date();
    const user : userModel = {
      id: '1',
      login: 'login',
      password: 'password',
      role: 'role',
      seniority: 'seniority',
      timeInCompany: 'timeInCompany',
      languages: ['languages'],
      phone: 'phone',
      email: 'email',
      linkedin: 'linkedin',
      name: 'name',
      lastName: 'lastName',
      dateBorn: today
    }
    return user;
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
              timeInCompany: row.timeInCompany,
              languages: row.languages,
              phone: row.phone,
              email: row.email,
              linkedin: row.linkedin,
              name: row.name,
              lastName: row.lastName,
              dateBorn: row.dateBorn
          };
      });

      return users;
    }

    return [];
    
  }
  
}