import { userModel } from "../../models/userModel";
import { userRepository } from "../../interfaces/repositories/userRepository";
import { createUserUseCase } from "../../interfaces/use-cases/user/createUser";

export class createUserUseCaseImpl implements createUserUseCase {
  private userRepository: userRepository;

  constructor(userRepository: userRepository) {
    this.userRepository = userRepository;
  }

  public async execute(user: userModel): Promise<boolean> {
    const newUser = await this.userRepository.createUser(user);
    return newUser;
  }
}