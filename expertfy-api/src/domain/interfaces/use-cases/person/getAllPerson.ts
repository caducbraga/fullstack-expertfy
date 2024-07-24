import { PersonModel } from "../../../../data/data-sources/models/person.model";
export interface getAllPersonUseCase {
    execute(): Promise<PersonModel[]>;
}