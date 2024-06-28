import { expertListModel } from "../../../domain/models/expertListModel";
import { userModel } from "../../../domain/models/userModel";

//* This interface is used to define the methods that will be used to interact with the user table.
export interface userDataSource {
  createUser(user: userModel): Promise<boolean>;
  updateUser(id: string, user: userModel): Promise<boolean>;
  deleteUser(id: string): Promise<boolean>;
  getUserById(id: string): Promise<userModel>;
  getAllUsers(): Promise<userModel[]>;
  getUsersAndCountByCompetenceId(competenceId: string): Promise<expertListModel[]>;
  getUserAccountInfo(id: string): Promise<expertListModel>;
}