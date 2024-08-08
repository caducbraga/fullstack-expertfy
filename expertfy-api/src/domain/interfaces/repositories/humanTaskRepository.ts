import { HumanTaskModel } from "../../../data/data-sources/models/human.task.model";
export interface HumanTaskRepository {
  createHumanTask(human_task: HumanTaskModel): Promise<boolean>;
  updateHumanTask(id: string, human_task: HumanTaskModel): Promise<boolean>;
  deleteHumanTask(id: string): Promise<boolean>;
  getHumanTaskById(id: string): Promise<HumanTaskModel>;
  getAllHumanTasks(): Promise<HumanTaskModel[]>;
}