import { competenceModel } from "../../models/competenceModel";
import { competenceRepository } from "../../interfaces/repositories/competenceRepository";
import { getCompetenceByNameUseCase } from "../../interfaces/use-cases/competence/getCompetenceByName";

export class getCompetenceByNameUseCaseImpl implements getCompetenceByNameUseCase {
  private competenceRepository: competenceRepository;

  constructor(competenceRepository: competenceRepository) {
    this.competenceRepository = competenceRepository;
  }

  public async execute(name: string): Promise<competenceModel[]> {
    const competence = await this.competenceRepository.getCompetenceByName(name);
    return competence;
  }
}