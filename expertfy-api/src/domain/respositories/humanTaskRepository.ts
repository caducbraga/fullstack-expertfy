import { HumanTaskModel } from "../../data/data-sources/models/human.task.model";
import { HumanTaskRepository } from "../interfaces/repositories/humanTaskRepository";
import { HumanTaskDataSource } from "../../data/interfaces/data-sources/humanTaskDataSource";
import { PersonCountDTO } from "../models/personCountDTO";

export class HumanTaskRepositoryImpl implements HumanTaskRepository {
  private humanTaskDataSource: HumanTaskDataSource;

  constructor(humanTaskDataSource: HumanTaskDataSource) {
    this.humanTaskDataSource = humanTaskDataSource;
  }

  public async createHumanTask(humanTask: HumanTaskModel): Promise<boolean> {
    return await this.humanTaskDataSource.createHumanTask(humanTask);
  }

  public async updateHumanTask(id: string, humanTask: HumanTaskModel): Promise<boolean> {
    return await this.humanTaskDataSource.updateHumanTask(id, humanTask);
  }

  public async deleteHumanTask(id: string): Promise<boolean> {
    return await this.humanTaskDataSource.deleteHumanTask(id);
  }

  public async getHumanTaskById(id: string): Promise<HumanTaskModel> {
    return await this.humanTaskDataSource.getHumanTaskById(id);
  }

  public async getAllHumanTasks(): Promise<HumanTaskModel[]> {
    return await this.humanTaskDataSource.getAllHumanTasks();
  }

  public async getCountGroupByPersonHumanTasksBySkillType(skillTypeId: string): Promise<PersonCountDTO[]> {
    return await this.humanTaskDataSource.getCountGroupByPersonHumanTasksBySkillType(skillTypeId);
  }
}