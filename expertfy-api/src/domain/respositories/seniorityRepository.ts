import { SimpleListModel } from "../models/simpleListModel";
import { seniorityRepository } from "../interfaces/repositories/seniorityRepository";
import { seniorityDataSource } from "../../data/interfaces/data-sources/seniorityDataSource";

export class seniorityRepositoryImpl implements seniorityRepository{
    private seniorityDataSource: seniorityDataSource;

    constructor(seniorityDataSource: seniorityDataSource){
        this.seniorityDataSource = seniorityDataSource;
    }
    
    async getAllSeniority(): Promise<SimpleListModel[]>{
        return this.seniorityDataSource.getAllSeniority();
    }
}