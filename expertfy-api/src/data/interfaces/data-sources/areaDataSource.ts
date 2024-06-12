import { SimpleListModel } from "../../../domain/models/simpleListModel";

export interface areaDataSource{
    getAllAreas(): Promise<SimpleListModel[]>;
}