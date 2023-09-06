import { competenceModel } from "../../../domain/models/competenceModel";

export interface competenceDataSource {
    createCompetence(competence: competenceModel): Promise<boolean>;
    updateCompetence(id: string, competence: competenceModel): Promise<boolean>;
    deleteCompetence(id: string): Promise<boolean>;
    getCompetenceById(id: string): Promise<competenceModel> ;
    getAllCompetence(): Promise<competenceModel[]>;
}