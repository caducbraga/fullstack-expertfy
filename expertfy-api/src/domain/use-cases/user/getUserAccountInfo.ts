import { accountInfoModel } from "../../models/accountInfoModel";
import { userRepository } from "../../interfaces/repositories/userRepository";
import { getUserAccountInfoUseCase } from "../../interfaces/use-cases/user/getUserAccountInfo";

export class getUserAccountInfoUseCaseImpl implements getUserAccountInfoUseCase {
  private userRepository: userRepository;

  constructor(userRepository: userRepository) {
    this.userRepository = userRepository;
  }

  public async execute(id: string): Promise<accountInfoModel> {
    const accountInfo = await this.userRepository.getUserAccountInfo(id);
    return accountInfo;
  }
}