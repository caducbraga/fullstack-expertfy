import { PersonModel } from "../../../../data/data-sources/models/person.model"; 

export interface deletePersonUseCase {
    execute(id: string): Promise<boolean>;
}