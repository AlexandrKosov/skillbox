import React, { ChangeEvent, FormEvent, useState } from 'react';
import styles from './commentform.less';
import { useStoreon } from 'storeon/react';

export default function CommentForm (){

  const { dispatch, comment } = useStoreon('comment');
  console.log(">>",comment);

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
        <form className={styles.form} onSubmit={handleSubmit}>
            <textarea className={styles.input} 
            value={value} 
            onChange={handleChange}
            // onBlur={handleBlur}
            aria-invalid={valueError?'true':undefined}
            />
            {touched && validateValue() && (<div style={{color: 'red'}}>{validateValue()}</div>)}
            <button type="submit" className={styles.button}>Комментировать</button>		
		</form>
    );
}