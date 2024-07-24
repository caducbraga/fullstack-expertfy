import { AttitudeEndorsementModel } from "../../data-sources/models/attitude.endorsement.model";


export interface AttitudeEndorsementDataSource {
  createAttitude(person: AttitudeEndorsementModel): Promise<boolean>;
  updateAttitude(id: string, person: AttitudeEndorsementModel): Promise<boolean>;
  deleteAttitude(id: string): Promise<boolean>;
  getAttitudeById(id: string): Promise<AttitudeEndorsementModel>;
  getAllAttitudes(): Promise<AttitudeEndorsementModel[]>;
  getAttitudeAccountInfo(id: string): Promise<AttitudeEndorsementModel>;
}