import { PersonModel } from "./person.model";

export interface AttitudeModel {
  id?: string;
  person: PersonModel;
  attitudeType: string;
  
}