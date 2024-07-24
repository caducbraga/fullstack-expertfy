import { PersonModel } from "../../../../data/data-sources/models/person.model";
export interface getPersonByIdUseCase {
    execute(id: string): Promise<PersonModel>;
}