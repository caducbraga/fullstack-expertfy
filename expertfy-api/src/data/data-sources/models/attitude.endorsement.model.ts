import { PersonModel } from "./person.model";
import { AttitudeModel } from "./attitude.model";

// A pessoa que está aqui é quem fez o endorsement
export interface AttitudeEndorsementModel {
  id?: string;
  person: PersonModel;
  attitude_evidenced: AttitudeModel;
  date: Date;
}