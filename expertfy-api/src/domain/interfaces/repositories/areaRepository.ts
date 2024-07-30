import { SimpleListModel } from "../../models/simpleListModel";

export interface AreaRepository{
    getAllAreas(): Promise<SimpleListModel[]>;
}