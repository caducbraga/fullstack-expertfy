import { competenceModel } from "../../../models/competenceModel";

export interface getCompetenceByIdUseCase {
  execute(id: string): Promise<competenceModel>;
}