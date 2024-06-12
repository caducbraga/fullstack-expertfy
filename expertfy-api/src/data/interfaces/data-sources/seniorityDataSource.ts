import { SimpleListModel } from "../../../domain/models/simpleListModel";

export interface seniorityDataSource{
    getAllSeniority(): Promise<SimpleListModel[]>;
}