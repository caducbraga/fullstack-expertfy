import { PersonModel } from "./person.model";
import { TaskOutputModel } from "./task.output.model";

export interface HumanTaskModel {
  id?: string;
  person: PersonModel;
  output: TaskOutputModel;
  taskType: string;
}