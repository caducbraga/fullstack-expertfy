import { PersonModel } from "./person.model";

export interface SkillModel {
  id?: string;
  person: PersonModel;
  skillType: string;
}