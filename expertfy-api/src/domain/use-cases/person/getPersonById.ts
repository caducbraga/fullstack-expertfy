import { PersonModel } from "../../../data/data-sources/models/person.model";
import { getPersonByIdUseCase } from "../../interfaces/use-cases/person/getPersonById";
import { personRepository } from "../../interfaces/repositories/personRepository";

export class getPersonByIdUseCaseImpl implements getPersonByIdUseCase {
  private personRepository: personRepository;

  constructor(personRepository: personRepository) {
    this.personRepository = personRepository;
  }

  public async execute(id: string): Promise<PersonModel> {
    const person = await this.personRepository.getPersonById(id);
    return person;
  }
}