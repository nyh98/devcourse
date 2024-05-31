import { SignupProps } from '../pages/Signup';
import { httpClient } from './http';

export const signup = async (userData: SignupProps) => {
  const res = await httpClient.post('/users/join', userData);
  return res.data;
};

export const resetPwd = async (data: SignupProps) => {
  const res = await httpClient.put('/users/reset', data);
  return res.data;
};

interface LoginResponse {
  token: string;
}
export const login = async (data: SignupProps) => {
  const res = await httpClient.post<LoginResponse>('/users/login', data);
  return res.data;
};
