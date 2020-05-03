type URL = string;
const baseURL: URL = 'https://reqres.in';

export class ReqresApi { 

  static listUsers: URL = `${baseURL}/api/users`;
  static registerUnsuccessful: URL = `${baseURL}/api/register`;
  
}

export class RegisterDTO { 
  public static email: string;
  public static password: string;
  constructor(data: object) {
    Object.assign(this,data);
  }
}