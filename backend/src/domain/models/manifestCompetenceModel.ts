import { userModel } from "./userModel";
import { competenceModel } from "./competenceModel";

export interface manifestCompetenceModel {
    id?: string;
    quantity: number;
    time: number;
    user: userModel;
    competence: competenceModel;
}
