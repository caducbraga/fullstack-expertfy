import { manifestCompetenceModel } from "../../../domain/models/manifestCompetenceModel";
import { manifestCompList } from "../../../domain/models/manifestCompList";

//* This interface is used to define the methods that will be used to interact with the manifest competence table.
export interface manifestCompDataSource {
  createManifestComp(manifestComp: manifestCompetenceModel): Promise<boolean>;
  updateManifestComp(id: string, manifestComp: manifestCompetenceModel): Promise<boolean>;
  deleteManifestComp(id: string): Promise<boolean>;
  getManifestCompById(id: string): Promise<manifestCompetenceModel>;
  getAllManifestComp(): Promise<manifestCompetenceModel[]>;
  getAllManifestCompAndCompetenceByUserId(userId: string): Promise<manifestCompList[]>;
}