import { SimpleListModel } from "../../models/simpleListModel";

export interface LanguageRepository{
    getAllLanguages(): Promise<SimpleListModel[]>;
}