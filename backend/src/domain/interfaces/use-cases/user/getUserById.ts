import { userModel } from "../../../models/userModel";

export interface getUserByIdUseCase {
    execute(id: string): Promise<userModel>;
}