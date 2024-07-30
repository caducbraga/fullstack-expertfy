import { SimpleListModel } from "../../models/simpleListModel";

export interface SeniorityRepository{
    getAllSeniority(): Promise<SimpleListModel[]>;
}