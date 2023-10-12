import { competenceModel } from "../../models/competenceModel";
import { competenceRepository } from "../../interfaces/repositories/competenceRepository";
import { getAllCompetenceUseCase } from "../../interfaces/use-cases/competence/getAllCompetence";

export class getAllCompetenceUseCaseImpl implements getAllCompetenceUseCase {
  private competenceRepository: competenceRepository;

  constructor(competenceRepository: competenceRepository) {
    this.competenceRepository = competenceRepository;
  }

  public async execute(): Promise<competenceModel[]> {
    const allCompetence = await this.competenceRepository.getAllCompetence();
    return allCompetence;
  }
}