import { competenceModel } from "../../../models/competenceModel";

export interface createCompetenceUseCase {
  execute(comp: competenceModel): Promise<boolean>;
}