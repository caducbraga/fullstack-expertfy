import { PersonModel } from "../../../data/data-sources/models/person.model";
import { updatePersonUseCase } from "../../interfaces/use-cases/person/updatePerson";
import { personRepository } from "../../interfaces/repositories/personRepository";

export class updatePersonUseCaseImpl implements updatePersonUseCase {
  private personRepository: personRepository;

  constructor(personRepository: personRepository) {
    this.personRepository = personRepository;
  }

  public async execute(id: string, person: PersonModel): Promise<boolean> {
    const updatedPerson = await this.personRepository.updatePerson(id, person);
    return updatedPerson;
  }
}