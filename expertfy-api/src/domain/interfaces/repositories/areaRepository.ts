import { SimpleListModel } from "../../models/simpleListModel";

export interface areaRepository{
    getAllAreas(): Promise<SimpleListModel[]>;
}