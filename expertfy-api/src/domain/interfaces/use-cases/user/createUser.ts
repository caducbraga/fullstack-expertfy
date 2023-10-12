import { userModel } from "../../../models/userModel";

export interface createUserUseCase {
    execute(user: userModel): Promise<boolean>;
}