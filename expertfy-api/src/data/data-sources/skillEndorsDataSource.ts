import { SkillEndorsementModel } from "../../data-sources/models/skill.endorsement.model";

export interface SkillEndorsementDataSource {
  createSkillEndors(endors: SkillEndorsementModel): Promise<boolean>;
  updateSkillEndors(id: string, endors: SkillEndorsementModel): Promise<boolean>;
  deleteSkillEndors(id: string): Promise<boolean>;
  getSkillByIdEndors(id: string): Promise<SkillEndorsementModel>;
  getAllSkillsEndors(): Promise<SkillEndorsementModel[]>;
}