import { manifestCompetenceModel } from "../../../models/manifestCompetenceModel";

export interface getAllManifestCompUseCase {
  execute(): Promise<manifestCompetenceModel[]>;
}