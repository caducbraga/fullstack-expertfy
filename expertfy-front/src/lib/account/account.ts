import axios from 'axios'

class Account {
  constructor() {
    this.baseApiUrl = "http://localhost:3000";
    // this.baseApiUrl = "https://6004-186-241-116-65.ngrok-free.app";

    axios.defaults.headers.common['ngrok-skip-browser-warning'] = true;
  }

  private baseApiUrl: string | undefined;

  async getAccountInfo(id : string) {
    try {
      const response = await axios.get(this.baseApiUrl + `/person/accountInfo/${id}`);
      return response.data;
    }
    catch (error) {
      console.log("Error: get Account Info" + error);
    }
  }

  async getCountScoreByUser(id : string) {
    try {
      const response = await axios.get(this.baseApiUrl + `/humanTask/countByPersonGroupBySkill/${id}`);
      return response.data;
    }
    catch (error) {
      console.log("Error: get Count Score" + error);
    }
  }



  async getTableListByUser(id : string) {
    try {
      const response = await axios.get(this.baseApiUrl + `/humanTask/tableListByPersonId/${id}`);
      return response.data;
    }
    catch (error) {
      console.log("Error: get Skill List By User" + error);
    }
  }

  async getTotalScoreForAll() {
    try {
      const response = await axios.get(this.baseApiUrl + `/humanTask/total/CountGroupBySkill`);
      return response.data;
    } catch (error) {
      console.log("Error: get Count Total Score" + error);
    }
  }

  async createSkillEndorsement(skillId : string, personId : string) {
    try {
      //TODO: criar a data de agora e formatar para yyyy-mm-dd
      const jsonPost = { skillId, personId, description: "uma descrição", date: '2020-08-17' };
      console.log(jsonPost);

      const response = await axios.post(this.baseApiUrl + `/skillEndors`, jsonPost);
      return response.data;
    }
    catch (error) {
      console.log("Error: create Skill Endorsement" + error);
    }
  }

}

export const accountInfo = new Account();
