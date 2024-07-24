import { PersonModel } from "../../../../data/data-sources/models/person.model"; 

export interface createPersonUseCase {
    execute(person: PersonModel): Promise<boolean>;
}