import { PersonModel } from "../../data/data-sources/models/person.model"

export interface expertListModel extends PersonModel {
  competenceCount: number;
  language: string;
  seniority: string;
  area: string;
}