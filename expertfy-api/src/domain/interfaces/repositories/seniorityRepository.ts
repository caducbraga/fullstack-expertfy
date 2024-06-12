import { SimpleListModel } from "../../models/simpleListModel";

export interface seniorityRepository{
    getAllSeniority(): Promise<SimpleListModel[]>;
}