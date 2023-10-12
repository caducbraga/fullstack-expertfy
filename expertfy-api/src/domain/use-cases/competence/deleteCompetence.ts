import { competenceModel } from "../../models/competenceModel";
import { competenceRepository } from "../../interfaces/repositories/competenceRepository";
import { deleteCompetenceUseCase } from "../../interfaces/use-cases/competence/deleteCompetence";

export class deleteCompetenceUseCaseImpl implements deleteCompetenceUseCase {
  private competenceRepository: competenceRepository;

  constructor(competenceRepository: competenceRepository) {
    this.competenceRepository = competenceRepository;
  }

  public async execute(id: string): Promise<boolean> {
    const deletedCompetence = await this.competenceRepository.deleteCompetence(id);
    return deletedCompetence;
  }
}