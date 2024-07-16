import { PersonModel } from "./person.model";
import { SkillModel } from "./skill.model";
import { AttitudeModel } from "./attitude.model";

// A pessoa que está aqui é quem fez o endorsement
export interface EndorsementModel {
  id?: string;
  person: PersonModel;
  skill_evidenced: SkillModel;
  attitude_evidenced: AttitudeModel;
  date: Date;
}