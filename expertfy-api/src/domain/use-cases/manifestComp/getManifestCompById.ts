import { manifestCompetenceModel } from "../../models/manifestCompetenceModel"; 
import { manifestCompRepository } from "../../interfaces/repositories/manifestCompRepository";
import { getManifestCompByIdUseCase } from "../../interfaces/use-cases/manifestComp/getManifestCompById";

export class getManifestCompByIdUseCaseImpl implements getManifestCompByIdUseCase {
  private manifestCompRepository: manifestCompRepository;

  constructor(manifestCompRepository: manifestCompRepository) {
    this.manifestCompRepository = manifestCompRepository;
  }

  public async execute(id: string): Promise<manifestCompetenceModel> {
    const manifestComp = await this.manifestCompRepository.getManifestCompById(id);
    return manifestComp;
  }
}