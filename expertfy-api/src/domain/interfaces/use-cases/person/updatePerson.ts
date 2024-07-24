import { PersonModel } from "../../../../data/data-sources/models/person.model";

export interface updatePersonUseCase {
    execute(id: string, user: PersonModel): Promise<boolean>;
}