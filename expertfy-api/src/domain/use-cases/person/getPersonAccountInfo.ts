import { PersonModel } from "../../../data/data-sources/models/person.model";
import { personRepository } from "../../interfaces/repositories/personRepository";
import { getPersonAccountInfoUseCase } from "../../interfaces/use-cases/person/getPersonAccountInfo";

export class getPersonAccountInfoUseCaseImpl implements getPersonAccountInfoUseCase {
  private personRepository: personRepository;

  constructor(personRepository: personRepository) {
    this.personRepository = personRepository;
  }

  public async execute(id: string): Promise<PersonModel> {
    const accountInfo = await this.personRepository.getPersonAccountInfo(id);
    return accountInfo;
  }
}