import { SkillModel } from "./skill.model";
import { TaskOutputModel } from "./task.output.model";

export interface HumanTaskModel {
  id?: string;
  skillId: string;
  taskOutputId: string;
  taskType: string;
}