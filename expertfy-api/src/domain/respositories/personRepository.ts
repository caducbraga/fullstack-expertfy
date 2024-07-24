import { PersonModel } from "../../data/data-sources/models/person.model";
import { personRepository } from "../interfaces/repositories/personRepository";
import { personDataSource } from "../../data/interfaces/data-sources/personDataSource";

export class personRepositoryImpl implements personRepository {
  private personDataSource: personDataSource;

  constructor(personDataSource: personDataSource) {
    this.personDataSource = personDataSource;
  }

  public async createPerson(person: PersonModel): Promise<boolean> {
    const result = await this.personDataSource.createPerson(person);
    return result;
  }

  public async updatePerson(id: string, person: PersonModel): Promise<boolean> {
    const result = await this.personDataSource.updatePerson(id, person);
    return result;
  }

  public async deletePerson(id: string): Promise<boolean> {
    const deletedPerson = await this.personDataSource.deletePerson(id);
    return deletedPerson;
  }

  public async getPersonById(id: string): Promise<PersonModel> {
    const person = await this.personDataSource.getPersonById(id);
    return person;
  }

  public async getAllPerson(): Promise<PersonModel[]> {
    const persons = await this.personDataSource.getAllPersons();
    return persons;
  }


  public async getPersonAccountInfo(id: string): Promise<PersonModel> {
    const personAccountInfo = await this.personDataSource.getPersonAccountInfo(id);
    return personAccountInfo;
  }
}