import { manifestCompetenceModel } from "../../../models/manifestCompetenceModel";

export interface getManifestCompByIdUseCase {
  execute(id: string): Promise<manifestCompetenceModel>;
}