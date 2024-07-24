import { PersonModel } from "../../../data/data-sources/models/person.model";
import { personRepository } from "../../interfaces/repositories/personRepository";
import { getAllPersonUseCase } from "../../interfaces/use-cases/person/getAllPerson";

export class getAllPersonUseCaseImpl implements getAllPersonUseCase {
  private personRepository: personRepository;

  constructor(personRepository: personRepository) {
    this.personRepository = personRepository;
  }

  public async execute(): Promise<PersonModel[]> {
    const persons = await this.personRepository.getAllPerson();
    return persons;
  }
}