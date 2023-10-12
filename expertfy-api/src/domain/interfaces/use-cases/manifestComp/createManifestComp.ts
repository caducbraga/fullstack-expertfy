import { manifestCompetenceModel } from "../../../models/manifestCompetenceModel";

export interface createManifestCompUseCase {
  execute(manifestComp: manifestCompetenceModel): Promise<boolean>;
}