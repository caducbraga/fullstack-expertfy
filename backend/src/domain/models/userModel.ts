import { personModel } from './personModel';

export interface userModel extends personModel {
  id?: string;
  login: string;
  password: string;
  role: string;
  seniority: string;
  timeInCompany: string;
  languages: string[];
  phone: string;
  email: string;
  linkedin?: string;
}