import { competenceModel } from "../models/competenceModel";
import { competenceRepository } from "../interfaces/repositories/competenceRepository";
import { competenceDataSource } from "../../data/interfaces/data-sources/competenceDataSource";

export class competenceRepositoryImpl implements competenceRepository {
  private competenceDataSource: competenceDataSource;

  constructor(competenceDataSource: competenceDataSource) {
    this.competenceDataSource = competenceDataSource;
  }

  public async createCompetence(competence: competenceModel): Promise<boolean> {
    const newCompetence = await this.competenceDataSource.createCompetence(competence);
    return newCompetence;
  }

  public async deleteCompetence(id: string): Promise<boolean> {
    const deletedCompetence = await this.competenceDataSource.deleteCompetence(id);
    return deletedCompetence;
  }

  public async getCompetenceById(id: string): Promise<competenceModel> {
    const competence = await this.competenceDataSource.getCompetenceById(id);
    return competence;
  }

  public async getAllCompetence(): Promise<competenceModel[]> {
    const allCompetence = await this.competenceDataSource.getAllCompetence();
    return allCompetence;
  }

  public async updateCompetence(id: string, competence: competenceModel): Promise<boolean> {
    const updatedCompetence = await this.competenceDataSource.updateCompetence(id, competence);
    return updatedCompetence;
  }
}