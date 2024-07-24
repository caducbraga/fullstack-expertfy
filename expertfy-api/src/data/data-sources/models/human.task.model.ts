import { SkillModel } from "./skill.model";
import { TaskOutputModel } from "./task.output.model";

export interface HumanTaskModel {
  id?: string;
  skill: SkillModel;
  output: TaskOutputModel;
  taskType: string;
}