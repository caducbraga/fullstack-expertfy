import { PersonModel } from "../../data-sources/models/person.model";

//* This interface is used to define the methods that will be used to interact with the user table.
export interface personDataSource {
  createPerson(person: PersonModel): Promise<boolean>;
  updatePerson(id: string, person: PersonModel): Promise<boolean>;
  deletePerson(id: string): Promise<boolean>;
  getPersonById(id: string): Promise<PersonModel>;
  getAllPersons(): Promise<PersonModel[]>;
  getPersonAccountInfo(id: string): Promise<PersonModel>;
}