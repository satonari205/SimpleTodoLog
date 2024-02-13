import api from "./api";
import { FormState } from "../types/IUser";

export const signup = async (data:FormState): Promise<void> => {
  await api.post('/api/signup',data);
}

export const login = async (data:FormState): Promise<void> => {
  await api.get('/sanctum/csrf-cookie');
  api.post('/api/login', data);
}

export const logout = (): void => {
  api.post('/api/logout');
}