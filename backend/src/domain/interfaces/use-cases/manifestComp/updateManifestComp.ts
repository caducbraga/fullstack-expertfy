import { manifestCompetenceModel } from "../../../models/manifestCompetenceModel";

export interface updateManifestCompUseCase {
  execute(id: string, manifestComp: manifestCompetenceModel): Promise<boolean>;
}