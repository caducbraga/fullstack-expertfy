import { manifestCompetenceModel } from "../../models/manifestCompetenceModel";

//* This interface is used to define the methods that will be used to interact with the manifest competence data source.
export interface manifestCompRepository {
  createManifestComp(manifestComp: manifestCompetenceModel): Promise<boolean>;
  updateManifestComp(id: string, manifestComp: manifestCompetenceModel): Promise<boolean>;
  deleteManifestComp(id: string): Promise<boolean>;
  getManifestCompById(id: string): Promise<manifestCompetenceModel>;
  getAllManifestComp(): Promise<manifestCompetenceModel[]>;
}