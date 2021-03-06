import React, { ChangeEvent, FormEvent, useState } from 'react';
import styles from './commentform.less';
import { Formik, Field, Form } from 'formik';
import { createStoreon } from 'storeon';
//-----------------------------------------
// // Initial state, reducers and business logic are packed in independent modules
let comment = (store:any) => {
  // Initial state
  store.on('@init', () => ({ comment: 'Привет, Storeon!' }))
  // Reducers returns only changed part of the state
 // store.on('inc', ({ comments }) => ({ count: count + 1 }))
 store.on('change', (comment: any, value: (store: any) => void)=>comment=value)
}

const store = createStoreon([comment])
console.log('store::',store, comment);
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
    //https://formik.org/docs/guides/validation
    <Formik
       initialValues={{
         comment: '',
       }}
       onSubmit={values => {
         console.log(values);
         alert(`Отправка формы`);
       }}
     >
       {({ errors, touched, isValidating }) => (
         <Form className={styles.form}> 
           
           <Field name="comment" validate={validateComment} as='textarea' className={styles.input} />
           {errors.comment && touched.comment && <div>{errors.comment}</div>}
 
           <button type="submit" className={styles.button}>Комментировать</button>
         </Form>
       )}
     </Formik>
    )


}