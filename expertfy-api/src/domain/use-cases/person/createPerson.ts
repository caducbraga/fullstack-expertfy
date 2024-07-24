import { PersonModel } from "../../../data/data-sources/models/person.model";
import { personRepository } from "../../interfaces/repositories/personRepository";
import { createPersonUseCase } from "../../interfaces/use-cases/person/createPerson";

export class createPersonUseCaseImpl implements createPersonUseCase {
  private personRepository: personRepository;

  constructor(personRepository: personRepository) {
    this.personRepository = personRepository;
  }

  public async execute(person: PersonModel): Promise<boolean> {
    const newPerson = await this.personRepository.createPerson(person);
    return newPerson;
  }
}