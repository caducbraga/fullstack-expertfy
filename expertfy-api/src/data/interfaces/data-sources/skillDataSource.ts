import { SkillModel } from "../../data-sources/models/skill.model";

export interface SkillDataSource {
  createSkill(person: SkillModel): Promise<boolean>;
  updateSkill(id: string, person: SkillModel): Promise<boolean>;
  deleteSkill(id: string): Promise<boolean>;
  getSkillById(id: string): Promise<SkillModel>;
  getAllSkills(): Promise<SkillModel[]>;
  getSkillAccountInfo(id: string): Promise<SkillModel>;
}