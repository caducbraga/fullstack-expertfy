import { userModel } from "../../../models/userModel";

export interface getAllUserUseCase {
    execute(): Promise<userModel[]>;
}