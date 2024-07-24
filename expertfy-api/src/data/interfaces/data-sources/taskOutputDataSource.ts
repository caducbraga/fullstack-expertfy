import { TaskOutputModel } from "../../data-sources/models/task.output.model";


export interface TaskOutputDataSource {
  createAttitude(person: TaskOutputModel): Promise<boolean>;
  updateAttitude(id: string, person: TaskOutputModel): Promise<boolean>;
  deleteAttitude(id: string): Promise<boolean>;
  getAttitudeById(id: string): Promise<TaskOutputModel>;
  getAllAttitudes(): Promise<TaskOutputModel[]>;
  getAttitudeAccountInfo(id: string): Promise<TaskOutputModel>;
}