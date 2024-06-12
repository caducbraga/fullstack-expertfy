import { SimpleListModel } from "../../models/simpleListModel";
import { seniorityRepository } from "../../interfaces/repositories/seniorityRepository";
import { getAllSeniorityUseCase } from "../../interfaces/use-cases/seniority/getAllSeniority";

export class getAllSeniorityUseCaseImpl implements getAllSeniorityUseCase{
    private seniorityRepository: seniorityRepository;

    constructor(seniorityRepository: seniorityRepository){
        this.seniorityRepository = seniorityRepository;
    }
    
    async getAllSeniority(): Promise<SimpleListModel[]>{
        return this.seniorityRepository.getAllSeniority();
    }
}