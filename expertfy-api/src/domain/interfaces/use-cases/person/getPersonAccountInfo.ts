import { PersonModel } from "../../../../data/data-sources/models/person.model";

export interface getPersonAccountInfoUseCase {
    execute(id: string): Promise<PersonModel>;
}