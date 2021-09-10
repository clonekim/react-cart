
import  { useState } from 'react';

export default function useField(initState) {

  const [fields, setFields] = useState(initState || {});


  const addField = (key, value) => {
    if(key)
    setFields(state => ({...state, [key]: value }));
  };

  const clearFields = () => setFields(initState || {});

  return {

    fields,
    addField,
    clearFields,
  }
};
