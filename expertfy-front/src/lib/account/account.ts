import axios from 'axios'
import dotenv from "dotenv";

class Account {
  constructor() {
    this.baseApiUrl = "http://localhost:3000";
    // this.baseApiUrl = "https://aceb-186-241-116-65.ngrok-free.app";

    axios.defaults.headers.common['ngrok-skip-browser-warning'] = true;
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