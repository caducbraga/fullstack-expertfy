import { PersonModel } from "./models/person.model";
import { PersonDataSource } from "../interfaces/data-sources/personDataSource";
import mysql, { RowDataPacket } from "mysql2/promise";

const personTable = "person";

export class PersonDataSourceImpl implements PersonDataSource {
  private db: mysql.Connection;

  constructor(db: mysql.Connection) {
    this.db = db;
  }

  public async createPerson(person: PersonModel): Promise<boolean> {
    try {
      const query = `INSERT INTO ${personTable} 
      (name, lastName, birthDate, email, photo, phone, linkedin, 
        team, employmentStartDate, languageId, seniorityId, areaId)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
      
      const values = [
        person.name,
        person.lastName,
        person.birthDate,
        person.email,
        person.photo, 
        person.phone,
        person.linkedin,
        person.team,
        person.employmentStartDate,
        person.seniorityId,
        person.areaId,
      ];
  
      const [rows] = await this.db.execute<RowDataPacket[]>(query, values);
  
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
  

  public async updatePerson(id: string, person: PersonModel): Promise<boolean> {
    try {
      const query = `UPDATE ${personTable} SET
      name=?, lastName=?, birthDate=?, email=?, photo=?, phone=?, linkedin=?, 
      team=?, employmentStartDate=?, languageId=?, seniorityId=?, areaId=? 
      WHERE id=?`;
  
      const values = [
        person.name,
        person.lastName,
        person.birthDate,
        person.email,
        person.photo, 
        person.phone,
        person.linkedin,
        person.team,
        person.employmentStartDate,
        person.seniorityId,
        person.areaId,
        id, 
      ];
  
      const [rows] = await this.db.execute<RowDataPacket[]>(query, values);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
  
  public async deletePerson(id: string): Promise<boolean> {
    try {
      const query = `DELETE FROM ${personTable} WHERE id=?`;
      const [rows] = await this.db.execute<RowDataPacket[]>(query, [id]);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
  
  public async getPersonById(id: string): Promise<PersonModel> {
    try {
      const query = `SELECT * FROM ${personTable} WHERE id=?`;
      const [rows] = await this.db.execute<RowDataPacket[]>(query, [id]);
  
      if(rows && rows.length > 0){
        return rows[0] as PersonModel;
      }
      return {} as PersonModel;
    } catch (error) {
      console.log(error);
      return {} as PersonModel;
    }
  }
  
  public async getAllPersons(): Promise<PersonModel[]> {
    const query = `SELECT * FROM ${personTable}`;
    
    try {
      const [rows] = await this.db.execute<RowDataPacket[]>(query);

      return rows as PersonModel[];

    } catch (error) {
      console.log(error);
      return [] as PersonModel[];
    }
    return [];
  }


  
  public async getPersonAccountInfo(id: string): Promise<PersonModel> {
    try {
      const query = `
      SELECT
        persons.*,
        l.name AS language,
        s.name AS seniority,
        a.name AS area
      FROM ${personTable} persons
      JOIN language l ON persons.languageId = l.id
      JOIN seniority s ON persons.seniorityId = s.id
      JOIN area a ON persons.areaId = a.id
      WHERE persons.id = ?;
    `;
      const [rows] = await this.db.execute<RowDataPacket[]>(query, [id]);
      
      if(rows && rows.length > 0){
        return rows[0] as PersonModel;
      }
      return {} as PersonModel;
    } catch (error) {
      console.log(error);
      return {} as PersonModel;
    }
  }
}