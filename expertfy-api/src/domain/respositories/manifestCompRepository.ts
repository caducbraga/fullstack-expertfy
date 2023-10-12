import { manifestCompetenceModel } from "../models/manifestCompetenceModel";
import { manifestCompRepository } from "../interfaces/repositories/manifestCompRepository";
import { manifestCompDataSource } from "../../data/interfaces/data-sources/manifestCompDataSource";

export class manifestCompRepositoryImpl implements manifestCompRepository {
  private manifestCompDataSource: manifestCompDataSource;

  constructor(manifestCompDataSource: manifestCompDataSource) {
    this.manifestCompDataSource = manifestCompDataSource;
  }

  public async createManifestComp(manifestComp: manifestCompetenceModel): Promise<boolean> {
    const newManifestComp = await this.manifestCompDataSource.createManifestComp(manifestComp);
    return newManifestComp;
  }

  public async updateManifestComp(id: string, manifestComp: manifestCompetenceModel): Promise<boolean> {
    const updatedManifestComp = await this.manifestCompDataSource.updateManifestComp(id, manifestComp);
    return updatedManifestComp;
  }

  public async deleteManifestComp(id: string): Promise<boolean> {
    const deletedManifestComp = await this.manifestCompDataSource.deleteManifestComp(id);
    return deletedManifestComp;
  }

  public async getManifestCompById(id: string): Promise<manifestCompetenceModel> {
    const manifestComp = await this.manifestCompDataSource.getManifestCompById(id);
    return manifestComp;
  }

  public async getAllManifestComp(): Promise<manifestCompetenceModel[]> {
    const allManifestComp = await this.manifestCompDataSource.getAllManifestComp();
    return allManifestComp;
  }


}