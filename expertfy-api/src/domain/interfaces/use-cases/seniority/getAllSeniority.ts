import { SimpleListModel } from "../../../models/simpleListModel";

export interface getAllSeniorityUseCase{
    getAllSeniority(): Promise<SimpleListModel[]>;
}