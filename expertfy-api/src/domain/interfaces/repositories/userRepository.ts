import { expertListModel } from "../../models/expertListModel";
import { userModel } from "../../models/userModel";
import { accountInfoModel } from "../../models/accountInfoModel";

export interface userRepository {
  createUser(user: userModel): Promise<boolean>;
  updateUser(id: string, user: userModel): Promise<boolean>;
  deleteUser(id: string): Promise<boolean>;
  getUserById(id: string): Promise<userModel>;
  getAllUser(): Promise<userModel[]>;
  getUsersAndCountByCompetenceId(competenceId: string): Promise<expertListModel[]>;
  getUserAccountInfo(id: string): Promise<accountInfoModel>;
}