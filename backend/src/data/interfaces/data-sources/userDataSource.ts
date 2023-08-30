import { userModel } from "../../../domain/models/userModel";

export interface userDataSource {
  createUser(user: userModel): Promise<boolean>;
  updateUser(id: string, user: userModel): Promise<boolean>;
  deleteUser(id: string): Promise<boolean>;
  getUserById(id: string): Promise<userModel> ;
  getAllUsers(): Promise<userModel[]>;
}