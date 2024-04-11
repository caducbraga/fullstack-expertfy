import axios from 'axios'
import dotenv from "dotenv";

class Account {
  constructor() {
    dotenv.config();
    // this.baseApiUrl = process.env.BASE_API;
    //TODO: Change this to the real API URL
    this.baseApiUrl = "http://localhost:3000";
  }

  private baseApiUrl: string | undefined;

  async getAccountInfo(id : string) {
    try {
      const response = await axios.get(this.baseApiUrl + `/user/accountInfo/${id}`);
      return response.data;
    }
    catch (error) {
      console.log("Error: get Account Info" + error);
    }
  }

  async getManifestCompListByUser(id : string) {
    try {
      const response = await axios.get(this.baseApiUrl + `/manifest/user/${id}`);
      return response.data;
    }
    catch (error) {
      console.log("Error: get Manifest Comp List By User" + error);
    }
  }

}

export const accountInfo = new Account();