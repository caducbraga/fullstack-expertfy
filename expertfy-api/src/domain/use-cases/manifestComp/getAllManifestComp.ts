import { manifestCompetenceModel } from "../../models/manifestCompetenceModel"; 
import { manifestCompRepository } from "../../interfaces/repositories/manifestCompRepository";
import { getAllManifestCompUseCase } from "../../interfaces/use-cases/manifestComp/getAllManifestComp";

export class getAllManifestCompUseCaseImpl implements getAllManifestCompUseCase {
  private manifestCompRepository: manifestCompRepository;

  constructor(manifestCompRepository: manifestCompRepository) {
    this.manifestCompRepository = manifestCompRepository;
  }

  public async execute(): Promise<manifestCompetenceModel[]> {
    const allManifestComp = await this.manifestCompRepository.getAllManifestComp();
    return allManifestComp;
  }
}