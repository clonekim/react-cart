import * as yup from 'yup';


export const Email = 
  yup
    .string()
    .email(' 잘못된 메일 주소입니다')
    .required('메일을 입력하세요');


export const Password = 
  yup
    .string()
    .matches(/^[a-zA-Z0-9]{4,8}/, '영문자 또는 숫자로 4~8자로 입력하세요')
    .required('암호를 입력하세요 ');

