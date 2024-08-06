import { SimpleListModel } from "../../models/simpleListModel";

export interface SkillTypeRepository {
  createSkillType(skill: SimpleListModel): Promise<boolean>;
  updateSkillType(id: string, skill: SimpleListModel): Promise<boolean>;
  deleteSkillType(id: string): Promise<boolean>;
  getSkillTypeById(id: string): Promise<SimpleListModel>;
  getAllSkillTypes(): Promise<SimpleListModel[]>;
}