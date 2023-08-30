import { getAllUserUseCase } from "../domain/interfaces/use-cases/user/getAllUser";
import { createUserUseCase } from "../domain/interfaces/use-cases/user/createUser";
import { updateUserUseCase } from "../domain/interfaces/use-cases/user/updateUser";
import { deleteUserUseCase } from "../domain/interfaces/use-cases/user/deleteUser";
import { getUserByIdUseCase } from "../domain/interfaces/use-cases/user/getUserById";
import { userModel } from "../domain/models/userModel";

export class userController {
  private createUserUseCase: createUserUseCase;
  private updateUserUseCase: updateUserUseCase;
  private deleteUserUseCase: deleteUserUseCase;
  private getUserByIdUseCase: getUserByIdUseCase;
  private getAllUserUseCase: getAllUserUseCase;

  constructor(
    createUserUseCase: createUserUseCase,
    updateUserUseCase: updateUserUseCase,
    deleteUserUseCase: deleteUserUseCase,
    getUserByIdUseCase: getUserByIdUseCase,
    getAllUserUseCase: getAllUserUseCase
  ) {
    this.createUserUseCase = createUserUseCase;
    this.updateUserUseCase = updateUserUseCase;
    this.deleteUserUseCase = deleteUserUseCase;
    this.getUserByIdUseCase = getUserByIdUseCase;
    this.getAllUserUseCase = getAllUserUseCase;
  }

  public async createUser(user: userModel): Promise<boolean> {
    const newUser = await this.createUserUseCase.execute(user);
    return newUser;
  }

  public async updateUser(id: string, user: userModel): Promise<boolean> {
    const updatedUser = await this.updateUserUseCase.execute(id, user);
    return updatedUser;
  }

  public async deleteUser(id: string): Promise<boolean> {
    const deletedUser = await this.deleteUserUseCase.execute(id);
    return deletedUser;
  }

  public async getUserById(id: string): Promise<userModel> {
    const user = await this.getUserByIdUseCase.execute(id);
    return user;
  }

  public async getAllUsers(): Promise<userModel[]> {
    const users = await this.getAllUserUseCase.execute();
    return users;
  }

}
// const getAll = async () => {

//   getAllUser: getAllUserUseCaseImpl
  
  
//   const users = await getAllUserUseCase.execute();
//   return users;
// };

// export default {
//   getAll,
// };