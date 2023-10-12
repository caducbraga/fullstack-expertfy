import { competenceModel } from "../../../domain/models/competenceModel";

//* This interface is used to define the methods that will be used to interact with the competence table.
export interface competenceDataSource {
    createCompetence(competence: competenceModel): Promise<boolean>;
    updateCompetence(id: string, competence: competenceModel): Promise<boolean>;
    deleteCompetence(id: string): Promise<boolean>;
    getCompetenceById(id: string): Promise<competenceModel> ;
    getAllCompetence(): Promise<competenceModel[]>;
    getCompetenceByName(name: string): Promise<competenceModel[]>;
}