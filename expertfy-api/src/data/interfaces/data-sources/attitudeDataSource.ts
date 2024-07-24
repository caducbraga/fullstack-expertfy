import { AttitudeModel } from "../../data-sources/models/attitude.model";


export interface AttitudeDataSource {
  createAttitude(person: AttitudeModel): Promise<boolean>;
  updateAttitude(id: string, person: AttitudeModel): Promise<boolean>;
  deleteAttitude(id: string): Promise<boolean>;
  getAttitudeById(id: string): Promise<AttitudeModel>;
  getAllAttitudes(): Promise<AttitudeModel[]>;
  getAttitudeAccountInfo(id: string): Promise<AttitudeModel>;
}