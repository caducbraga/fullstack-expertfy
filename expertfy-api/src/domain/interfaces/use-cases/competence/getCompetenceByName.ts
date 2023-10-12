import { competenceModel } from "../../../models/competenceModel";

export interface getCompetenceByNameUseCase {
  execute(name: string): Promise<competenceModel[]>;
}