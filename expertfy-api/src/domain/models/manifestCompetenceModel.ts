import { userModel } from "./userModel";
import { competenceModel } from "./competenceModel";

export interface manifestCompetenceModel {
    id?: string;
    timestamp: Date;
    description: string;
    user: userModel;
    competence: competenceModel;
    link: string;
}
