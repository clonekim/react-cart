import  { useState, useEffect } from 'react';

export default function useError( value ) {

  const [errors, setErrors] = useState({});

  useEffect(() => {
    console.log('ping - errors');
    clearError();
  }, [value]);


  const addError = (key, message) => {
    setErrors(state => ({...state, [key]: message}));
    console.log('Errors =>', errors);
  };

  const clearError = () => setErrors({});

  const getError = key => {

    const message = errors[key]||'';

    if(message) {
      return <div><p style={{color: 'red'}}> {message} </p></div>
    }

    return null;


  };

  return {

    errors,
    addError,
    getError,
    clearError
  }
};
