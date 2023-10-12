import { competenceModel } from "../../../models/competenceModel";

export interface deleteCompetenceUseCase {
  execute(id: string): Promise<boolean>;
}