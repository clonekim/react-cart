import * as yup from 'yup';
import { Email, Password } from './validator';



export const LoginSchema = yup.object().shape({
  email: Email,
  password: Password
});
