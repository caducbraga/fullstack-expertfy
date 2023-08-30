import { userModel } from "../../models/userModel";
import { updateUserUseCase } from "../../interfaces/use-cases/user/updateUser";
import { userRepository } from "../../interfaces/repositories/userRepository";

export class updateUserUseCaseImpl implements updateUserUseCase {
  private userRepository: userRepository;

  constructor(userRepository: userRepository) {
    this.userRepository = userRepository;
  }

  public async execute(id: string, user: userModel): Promise<boolean> {
    const updatedUser = await this.userRepository.updateUser(id, user);
    return updatedUser;
  }
}