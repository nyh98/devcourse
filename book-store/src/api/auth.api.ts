import { SignupProps } from '../pages/Signup';
import { httpClient } from './http';

export const signup = async (userData: SignupProps) => {
  const res = await httpClient.post('/users/join', userData);
  return res.data;
};
