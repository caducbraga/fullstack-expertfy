import { competenceModel } from "../../models/competenceModel";
import { competenceRepository } from "../../interfaces/repositories/competenceRepository";
import { createCompetenceUseCase } from "../../interfaces/use-cases/competence/createCompetence";

export class createCompetenceUseCaseImpl implements createCompetenceUseCase {
  private competenceRepository: competenceRepository;

  constructor(competenceRepository: competenceRepository) {
    this.competenceRepository = competenceRepository;
  }

  public async execute(competence: competenceModel): Promise<boolean> {
    const newCompetence = await this.competenceRepository.createCompetence(competence);
    return newCompetence;
  }
}