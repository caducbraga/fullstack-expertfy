import { competenceModel } from "../../models/competenceModel";
import { competenceRepository } from "../../interfaces/repositories/competenceRepository";
import { getCompetenceByIdUseCase } from "../../interfaces/use-cases/competence/getCompetenceById";

export class getCompetenceByIdUseCaseImpl implements getCompetenceByIdUseCase {
  private competenceRepository: competenceRepository;

  constructor(competenceRepository: competenceRepository) {
    this.competenceRepository = competenceRepository;
  }

  public async execute(id: string): Promise<competenceModel> {
    const competence = await this.competenceRepository.getCompetenceById(id);
    return competence;
  }
}