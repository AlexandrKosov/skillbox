import React, { ChangeEvent, FormEvent, useState } from 'react';
import styles from './commentform.less';
import { createStoreon } from 'storeon';
//-----------------------------------------
// // Initial state, reducers and business logic are packed in independent modules
// let count = store => {
//   // Initial state
//   store.on('@init', () => ({ count: 0 }))
//   // Reducers returns only changed part of the state
//   store.on('inc', ({ count }) => ({ count: count + 1 }))
// }

// export const store = createStoreon([count])
//-----------------------------------------------------------------------------
function validateComment(value: string) {
  let error='';
  if(value.length<=3) error="Должно быть больше 3х символов!"
  return error;
}

export default function CommentForm (){
    const [value, setValue] = useState('');
    const [touched, setTouched] = useState(false); 
    const [valueError, setValueError] = useState('');

    function handleSubmit(event: FormEvent){
        event.preventDefault();
        setTouched(true);
        setValueError(validateValue());

        const isFormValid = !validateValue();
        if(!isFormValid) return
        
        console.log("send:",value);
    }

    function handleChange(event: ChangeEvent<HTMLTextAreaElement>){
        setValue(event.target.value);
        //setValueTouched(true);
    }

    function handleBlur(){
        //setValueTouched(true);
    }

    function validateValue(){
        if(value.length <= 3 ) return 'Нужно больше трёх символов';
        return '';
    }
    
    return (
      <>
      </>
    )


}