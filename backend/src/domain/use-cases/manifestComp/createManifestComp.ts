import { manifestCompetenceModel } from "../../models/manifestCompetenceModel"; 
import { manifestCompRepository } from "../../interfaces/repositories/manifestCompRepository";
import { createManifestCompUseCase } from "../../interfaces/use-cases/manifestComp/createManifestComp";

export class createManifestCompUseCaseImpl implements createManifestCompUseCase {
  private manifestCompRepository: manifestCompRepository;

  constructor(manifestCompRepository: manifestCompRepository) {
    this.manifestCompRepository = manifestCompRepository;
  }

  public async execute(manifestComp: manifestCompetenceModel): Promise<boolean> {
    const newManifestComp = await this.manifestCompRepository.createManifestComp(manifestComp);
    return newManifestComp;
  }
}