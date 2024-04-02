import axios from 'axios'

class Account {
  async getAccountInfo(id : string) {
    try {
      const response = await axios.get(`http://localhost:3000/user/${id}`);
      return response.data;
    }
    catch (error) {
      console.log("Error: get Account Info" + error);
    }
  }



}

export const accountInfo = new Account();