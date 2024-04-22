import { SimpleListModel } from "../models/simpleListModel";
import { areaDataSource } from "../../data/interfaces/data-sources/areaDataSource";
import { areaRepository } from "../../domain/interfaces/repositories/areaRepository";

export class areaRepositoryImpl implements areaRepository{
    private areaDataSource: areaDataSource;

    constructor(areaDataSource: areaDataSource){
        this.areaDataSource = areaDataSource;
    }

    async getAllAreas(): Promise<SimpleListModel[]>{
        return this.areaDataSource.getAllAreas();
    }
}