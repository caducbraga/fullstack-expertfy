import { competenceModel } from "../../../models/competenceModel";

export interface getAllCompetenceUseCase {
  execute(): Promise<competenceModel[]>;
}