import axios from 'axios'
import dotenv from "dotenv";

export interface Competence {
  id: number;
  name: string;
  description: string;
}

export interface Expert {
  id: number;
  name: string;
  email: string;
  photo: string;
  phone: string;
  linkedin: string;
  team: string;
  employmentStartDate: Date;
  languageId: string;
  seniorityId: string;
  areaId: string;
  office: string;
  competenceCount: number;
}

class SearchExpert {
  constructor() {
    dotenv.config();
    // this.baseApiUrl = process.env.BASE_API;
    //TODO: Change this to the real API URL
    this.baseApiUrl = "http://localhost:3000";
  }

  private baseApiUrl: string | undefined;

  async getSuggestions(name: string) {
    console.log("getSuggestions");
    console.log(this.baseApiUrl + `/competence/findByName/${name}`);
    try {
      const response = await axios.get(this.baseApiUrl + `/competence/findByName/${name}`);
      return response.data;
      
    } catch (error) {
      console.log("Error: get Suggestions" + error);
    }
  }

  async getExpertList(selectedSuggestion: Competence | null) {
    try {
      const response = await axios.get(this.baseApiUrl + `/user/listAllByCompetenceId/${selectedSuggestion?.id}`);
      return response.data;
    }
    catch (error) {
      console.log("Error: get Expert List" + error);
    }
  }

  async getAllSuggestions() {
    try {
      const response = await axios.get(this.baseApiUrl + `/competence`);
      return response.data;
    }
    catch (error) {
      console.log("Error: get All Suggestions" + error);
    }
  }
}

export const searchExpert = new SearchExpert();