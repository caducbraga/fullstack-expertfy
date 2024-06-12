import { userModel } from "./userModel";

export interface expertListModel extends userModel {
  competenceCount: number;
  language: string;
  seniority: string;
  area: string;
}