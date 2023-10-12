import { competenceModel } from "../../../models/competenceModel";

export interface updateCompetenceUseCase {
  execute(id: string, comp: competenceModel): Promise<boolean>;
}