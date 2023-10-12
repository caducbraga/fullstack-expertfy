import { expertListModel } from "../../models/expertListModel";
import { userRepository } from "../../interfaces/repositories/userRepository";
import { getUsersAndCountByCompetenceIdUseCase } from "../../interfaces/use-cases/user/getUsersAndCountByCompetenceId";

export class getUsersAndCountByCompetenceIdUseCaseImpl implements getUsersAndCountByCompetenceIdUseCase {
  private userRepository: userRepository;

  constructor(userRepository: userRepository) {
    this.userRepository = userRepository;
  }

  public async execute(competenceId: string): Promise<expertListModel[]> {
    const users = await this.userRepository.getUsersAndCountByCompetenceId(competenceId);
    return users;
  }
}