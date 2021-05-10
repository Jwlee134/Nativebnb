import { api } from ".";

export interface ILogin {
  username: string;
  password: string;
}

interface IForm extends ILogin {
  first_name: string;
  last_name: string;
  email: string;
}

export const createAccountAPI = (form: IForm) => api.post("/users/", form);

export const loginAPI = (form: ILogin) => api.post("/users/login/", form);
