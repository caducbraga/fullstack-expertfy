import { SimpleListModel } from "../../models/simpleListModel";

export interface languageRepository{
    getAllLanguages(): Promise<SimpleListModel[]>;
}