import React, { useState} from 'react';
import * as yup from 'yup';


function InputPanel({removeHandler, index, setModels}) {
  const [fields, setFields] = useState({});
  const onChange = (key, e) => {
    setFields(state => ({...state, [key]: e.target.value}));
    setModels(state => {
      state.splice(index, 1, fields)
      return state;
    });
  };

  return (
    <div style={{padding: 2}}>
      <span>
        분류1: <input type="text" onChange={e => onChange('part1', e) } />
        분류2: <input type="text" onChange={e => onChange('part2', e) }/>
        시작: <input type="text" onChange={e => onChange('start', e) } />
        종료: <input type="text" onChange={e => onChange('end', e) } />
        <button onClick={removeHandler}>X</button>

      </span>
    </div>
  );

}

function Admin() {

  const dateTramsform = (e) => {
    console.log(e);

  };
  const InputSchema = yup.array().of(

    yup.object().shape({
      part1: yup.string().required('분류1에 값을 입력하세요'),
      part2: yup.string().required('분류2에 값을 입력하세요'),
      start: yup.date().transform(dateTramsform).required('시작일에 값을 입력하세요'),
      end: yup.date().transform(dateTramsform).required('종료일에 값을 입력하세요')
    })

  );

  
  const [models, setModels] = useState([]);
  

  const addModel =() => {
    setModels(state => ([...state, {part1: null,
                                    part2: null,
                                    start: null,
                                    end: null}])); 
  };

  const removeModel =(indx) => {
   const list =  models.filter((m, index) => index !== indx)
    setModels(list);
  };

  const onClick = () => {

    InputSchema.validate(models).then(res => console.log(res)).catch(err => console.log(err));
  };

  return (
    <div>
      <p>
        <button onClick={addModel} >+ Add</button>
      </p>
      {models.map((m, indx) => <InputPanel key={indx} setModels={setModels} index={indx} removeHandler={() => removeModel(indx)} />)}
      <button onClick={onClick} >OK</button>
    </div>

  );

}

export default Admin;
