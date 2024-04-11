import { manifestCompRepository } from "../../interfaces/repositories/manifestCompRepository";
import { getAllManifestCompAndCompetenceUseCase } from "../../interfaces/use-cases/manifestComp/getAllManifestCompAndCompetence";
import { manifestCompList } from "../../models/manifestCompList";

export class getAllManifestCompAndCompetenceUseCaseImpl implements getAllManifestCompAndCompetenceUseCase {
  private manifestCompRepository: manifestCompRepository;

  constructor(manifestCompRepository: manifestCompRepository) {
    this.manifestCompRepository = manifestCompRepository;
  }

  public async execute(userId: string): Promise<manifestCompList[]> {
    const manifestCompAndCompetence = await this.manifestCompRepository.getAllManifestCompAndCompetenceByUserId(userId);
    return manifestCompAndCompetence;
  }

}