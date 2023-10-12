import { manifestCompetenceModel } from "../../models/manifestCompetenceModel"; 
import { manifestCompRepository } from "../../interfaces/repositories/manifestCompRepository";
import { updateManifestCompUseCase } from "../../interfaces/use-cases/manifestComp/updateManifestComp";

export class updateManifestCompUseCaseImpl implements updateManifestCompUseCase {
  private manifestCompRepository: manifestCompRepository;

  constructor(manifestCompRepository: manifestCompRepository) {
    this.manifestCompRepository = manifestCompRepository;
  }

  public async execute(id: string, manifestComp: manifestCompetenceModel): Promise<boolean> {
    const updatedManifestComp = await this.manifestCompRepository.updateManifestComp(id, manifestComp);
    return updatedManifestComp;
  }
}