import { manifestCompList } from "../../../models/manifestCompList";

export interface getAllManifestCompAndCompetenceUseCase {
  execute(userId: string): Promise<manifestCompList[]>;
}