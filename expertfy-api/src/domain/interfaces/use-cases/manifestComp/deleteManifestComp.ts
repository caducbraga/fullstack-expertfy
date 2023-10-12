import { manifestCompetenceModel } from "../../../models/manifestCompetenceModel";

export interface deleteManifestCompUseCase {
  execute(id: string): Promise<boolean>;
}