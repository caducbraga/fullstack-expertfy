import { personModel } from './personModel';

export interface userModel extends personModel {
  id?: string;
  login: string;
  password: string;
  photo: Blob;
  seniority: string;
  employmentStartDate: Date;
  languages: string[];
  phone: string;
  email: string;
  linkedin?: string;
}