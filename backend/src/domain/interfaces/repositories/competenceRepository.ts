import { competenceModel } from "../../models/competenceModel";

export interface competenceRepository {
    createCompetence(competence: competenceModel): Promise<boolean>;
    updateCompetence(id: string, competence: competenceModel): Promise<boolean>;
    deleteCompetence(id: string): Promise<boolean>;
    getCompetenceById(id: string): Promise<competenceModel> ;
    getAllCompetences(): Promise<competenceModel[]>;
}