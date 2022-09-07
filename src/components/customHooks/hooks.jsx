import { useState, useEffect } from 'react';

//custom Hook
export const useInput = (initialValue, validations) => {
   const [value, setValue] = useState(initialValue);
   const [isDirty, setIsDirty] = useState(false);
   const valid = useValidation(value, validations);
   const onChange = (e) => {
      setValue(e.target.value);
   };
   const onBlur = (e) => {
      setIsDirty(true);
   };
   return { value, onChange, onBlur, isDirty, ...valid };
};

// use validation

const useValidation = (value, validations) => {
   const [isEmpty, setIsEmpty] = useState(true);
   const [minEmptyError, setMinEmptyError] = useState(false);
   const [emailError, setEmailError] = useState(false);
   const [inputValid, setInputValid] = useState(false);
   const [nameError, setNameError] = useState(false);
   useEffect(() => {
      for (const validation in validations) {
         switch (validation) {
            case 'minLength':
               value.length < validations[validation]
                  ? setMinEmptyError(true)
                  : setMinEmptyError(false);
               break;
            case 'isEmpty':
               value ? setIsEmpty(false) : setIsEmpty(true);
               break;
            case 'isEmail':
               const re =
                  /^(([^<>()[\]\\.,;:\s@\\"]+(\.[^<>()[\]\\.,;:\s@\\"]+)*)|(\\".+\\"))@(([^<>()[\]\\.,;:\s@\\"]+\.)+[^<>()[\]\\.,;:\s@\\"]{2,})$/i;
               re.test(String(value).toLowerCase())
                  ? setEmailError(false)
                  : setEmailError(true);
               break;
            case 'isName':
               const reg = /^\S+$/;
               reg.test(String(value).toLowerCase())
                  ? setNameError(false)
                  : setNameError(true);
               break;
            default:
               break;
         }
      }
   }, [validations, value]);

   useEffect(() => {
      if (isEmpty || minEmptyError || emailError || nameError) {
         setInputValid(false);
      } else {
         setInputValid(true);
      }
   }, [isEmpty, emailError, minEmptyError, nameError]);
   return {
      isEmpty,
      minEmptyError,
      emailError,
      inputValid,
      nameError
   };
};
