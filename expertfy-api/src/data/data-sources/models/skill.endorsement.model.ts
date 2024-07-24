import { PersonModel } from "./person.model";
import { SkillModel } from "./skill.model";

// A pessoa que está aqui é quem fez o endorsement
export interface SkillEndorsementModel {
  id?: string;
  person: PersonModel;
  skill_evidenced: SkillModel;
  date: Date;
}