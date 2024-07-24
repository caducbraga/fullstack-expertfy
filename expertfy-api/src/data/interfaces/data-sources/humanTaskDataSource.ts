import { HumanTaskModel } from "../../data-sources/models/human.task.model";

export interface HumanTaskDataSource {
  createHumanTask(taskOut: HumanTaskModel): Promise<boolean>;
  updateHumanTask(id: string, taskOut: HumanTaskModel): Promise<boolean>;
  deleteHumanTask(id: string): Promise<boolean>;
  getHumanTaskById(id: string): Promise<HumanTaskModel>;
  getAllHumanTasks(): Promise<HumanTaskModel[]>;
}