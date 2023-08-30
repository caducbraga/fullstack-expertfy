import { userModel } from "../../models/userModel";
import { userRepository } from "../../interfaces/repositories/userRepository";
import { deleteUserUseCase } from "../../interfaces/use-cases/user/deleteUser";

export class deleteUserUseCaseImpl implements deleteUserUseCase {
  private userRepository: userRepository;

  constructor(userRepository: userRepository) {
    this.userRepository = userRepository;
  }

  public async execute(id: string): Promise<boolean> {
    const deletedUser = await this.userRepository.deleteUser(id);
    return deletedUser;
  }
}