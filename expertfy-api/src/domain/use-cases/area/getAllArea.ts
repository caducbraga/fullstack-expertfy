import { SimpleListModel } from "../../models/simpleListModel";
import { areaRepository } from "../../interfaces/repositories/areaRepository";
import { getAllAreasUseCase } from "../../interfaces/use-cases/area/getAllArea";

export class getAllAreasUseCaseImpl implements getAllAreasUseCase{
    private areaRepository: areaRepository;

    constructor(areaRepository: areaRepository){
        this.areaRepository = areaRepository;
    }
    
    async getAllAreas(): Promise<SimpleListModel[]>{
        return this.areaRepository.getAllAreas();
    }
}