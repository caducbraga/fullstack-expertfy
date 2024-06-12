import { SimpleListModel } from "../../../domain/models/simpleListModel";

export interface languageDataSource{
    getAllLanguages(): Promise<SimpleListModel[]>;
}