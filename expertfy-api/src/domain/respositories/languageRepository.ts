import { SimpleListModel } from "../models/simpleListModel";
import { languageDataSource } from "../../data/interfaces/data-sources/languageDataSource";
import { languageRepository } from "../../domain/interfaces/repositories/languageRepository";

export class languageRepositoryImpl implements languageRepository{
    private languageDataSource: languageDataSource;

    constructor(languageDataSource: languageDataSource){
        this.languageDataSource = languageDataSource;
    }
    
    async getAllLanguages(): Promise<SimpleListModel[]>{
        return this.languageDataSource.getAllLanguages();
    }
}