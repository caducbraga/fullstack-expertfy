import { accountInfoModel } from "../../../models/accountInfoModel";

export interface getUserAccountInfoUseCase {
    execute(id: string): Promise<accountInfoModel>;
}