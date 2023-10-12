import { manifestCompetenceModel } from "../../models/manifestCompetenceModel"; 
import { manifestCompRepository } from "../../interfaces/repositories/manifestCompRepository";
import { deleteManifestCompUseCase } from "../../interfaces/use-cases/manifestComp/deleteManifestComp";

export class deleteManifestCompUseCaseImpl implements deleteManifestCompUseCase {
  private manifestCompRepository: manifestCompRepository;

  constructor(manifestCompRepository: manifestCompRepository) {
    this.manifestCompRepository = manifestCompRepository;
  }

  public async execute(id: string): Promise<boolean> {
    const deletedManifestComp = await this.manifestCompRepository.deleteManifestComp(id);
    return deletedManifestComp;
  }
}