import { PersonModel } from "../../data/data-sources/models/person.model"

export interface ExpertListDTO extends PersonModel {
  language: string;
  seniority: string;
  area: string;
}