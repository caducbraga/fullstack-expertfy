import { userModel } from "../../models/userModel";
import { userRepository } from "../../interfaces/repositories/userRepository";
import { getAllUserUseCase } from "../../interfaces/use-cases/user/getAllUser";

export class getAllUserUseCaseImpl implements getAllUserUseCase {
  private userRepository: userRepository;

  constructor(userRepository: userRepository) {
    this.userRepository = userRepository;
  }

  public async execute(): Promise<userModel[]> {
    const users = await this.userRepository.getAllUser();
    return users;
  }
}