import { SimpleListModel } from "../../../models/simpleListModel";

export interface getAllAreasUseCase{
    getAllAreas(): Promise<SimpleListModel[]>;
}