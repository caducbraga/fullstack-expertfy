import { userModel } from "../../models/userModel";
import { getUserByIdUseCase } from "../../interfaces/use-cases/user/getUserById";
import { userRepository } from "../../interfaces/repositories/userRepository";

export class getUserByIdUseCaseImpl implements getUserByIdUseCase {
  private userRepository: userRepository;

  constructor(userRepository: userRepository) {
    this.userRepository = userRepository;
  }

  public async execute(id: string): Promise<userModel> {
    const user = await this.userRepository.getUserById(id);
    return user;
  }
}