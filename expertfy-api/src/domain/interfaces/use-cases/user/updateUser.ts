import { userModel } from "../../../models/userModel";

export interface updateUserUseCase {
    execute(id: string, user: userModel): Promise<boolean>;
}