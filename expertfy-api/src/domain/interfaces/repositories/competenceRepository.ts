import { competenceModel } from "../../models/competenceModel";

//* This interface is used to define the methods that will be used to interact with the competence data source.
export interface competenceRepository {
  createCompetence(competence: competenceModel): Promise<boolean>;
  updateCompetence(id: string, competence: competenceModel): Promise<boolean>;
  deleteCompetence(id: string): Promise<boolean>;
  getCompetenceById(id: string): Promise<competenceModel>;
  getAllCompetence(): Promise<competenceModel[]>;
}