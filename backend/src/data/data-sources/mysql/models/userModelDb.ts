export interface userModelDb{
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
    name: string;
    lastName: string;
    dateBorn: Date;
  }