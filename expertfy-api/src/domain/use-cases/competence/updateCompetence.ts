import { competenceModel } from "../../models/competenceModel";
import { competenceRepository } from "../../interfaces/repositories/competenceRepository";
import { updateCompetenceUseCase } from "../../interfaces/use-cases/competence/updateCompetence";

export class updateCompetenceUseCaseImpl implements updateCompetenceUseCase {
  private competenceRepository: competenceRepository;

  constructor(competenceRepository: competenceRepository) {
    this.competenceRepository = competenceRepository;
  }

  public async execute(id: string, competence: competenceModel): Promise<boolean> {
    const updatedCompetence = await this.competenceRepository.updateCompetence(id, competence);
    return updatedCompetence;
  }
}
