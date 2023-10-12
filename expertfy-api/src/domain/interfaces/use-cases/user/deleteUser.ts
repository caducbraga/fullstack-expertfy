import { userModel } from "../../../models/userModel";

export interface deleteUserUseCase {
    execute(id: string): Promise<boolean>;
}