import { SimpleListModel } from "../../../models/simpleListModel";

export interface getAllLanguagesUseCase{
    getAllLanguages(): Promise<SimpleListModel[]>;
}