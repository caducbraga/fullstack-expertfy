import { PersonModel } from "../../../data/data-sources/models/person.model";
import { personRepository } from "../../interfaces/repositories/personRepository";
import { deletePersonUseCase } from "../../interfaces/use-cases/person/deletePerson";

export class deletePersonUseCaseImpl implements deletePersonUseCase {
  private personRepository: personRepository;

  constructor(personRepository: personRepository) {
    this.personRepository = personRepository;
  }

  public async execute(id: string): Promise<boolean> {
    const deletedPerson = await this.personRepository.deletePerson(id);
    return deletedPerson;
  }
}