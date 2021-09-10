import React from 'react';
import { useHistory } from 'react-router-dom';
import { LoginSchema } from './schema';
import useFields from './hook/useField';
import useError from './hook/useError';
import { useLogin } from './store';

function Login() {

  const history = useHistory();
  const { fields, addField } = useFields({email: '', password: ''});
  const { getError, addError } = useError(fields);

  const {  login } = useLogin();


  const onSubmit = (e) => {

    console.log(fields);
    LoginSchema
      .validate(fields, {abortEarly: false})
      .then(() => {
        login(fields.email, fields.password);
        history.push('/shop');
      })
      .catch(err => err.inner.forEach(e => addError( e.path,  e.message) ));

    e.preventDefault();

  };

  return (

    <form onSubmit={onSubmit}>
      <div>
        <label>Email address</label>
        <input type="text" placeholder="Enter email" onChange={(e) => addField('email', e.target.value)}  />
        {getError('email')}
      </div>

      <div>
        <label>Password</label>
        <input type="password" placeholder="Password" onChange={e => addField('password', e.target.value)} />
        {getError('password')}
      </div>

      <button type="submit"> Login </button>

    </form>



  );


};


export default Login;
