import { SkillEndorsementModel } from "../../data-sources/models/skill.endorsement.model";

export interface SkillEndorsementDataSource {
  createSkill(person: SkillEndorsementModel): Promise<boolean>;
  updateSkill(id: string, person: SkillEndorsementModel): Promise<boolean>;
  deleteSkill(id: string): Promise<boolean>;
  getSkillById(id: string): Promise<SkillEndorsementModel>;
  getAllSkills(): Promise<SkillEndorsementModel[]>;
  getSkillAccountInfo(id: string): Promise<SkillEndorsementModel>;
}