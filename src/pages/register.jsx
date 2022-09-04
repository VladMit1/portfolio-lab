/* eslint-disable no-self-compare */
import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

//custom Hook
const useInput = (initialValue, validations) => {
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
                  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
               re.test(String(value).toLowerCase())
                  ? setEmailError(false)
                  : setEmailError(true);
               break;
            default:
               break;
         }
      }
   }, [value]);

   useEffect(() => {
      if (isEmpty || minEmptyError || emailError) {
         setInputValid(false);
      } else {
         setInputValid(true);
      }
   }, [isEmpty, emailError, minEmptyError]);
   return {
      isEmpty,
      minEmptyError,
      emailError,
      inputValid
   };
};

export const Register = () => {
   const email = useInput('', { isEmpty: true, minLength: 3, isEmail: false });
   const password = useInput('', { isEmpty: true, minLength: 6 });
   const ripidePasword = useInput('', { isEmpty: true, minLength: 6 });
   const styleErrorMail =
      email.isDirty && !email.inputValid
         ? { borderBottom: '1px solid red' }
         : null;
   const styleErrorPass =
      password.isDirty && !password.inputValid
         ? { borderBottom: '1px solid red' }
         : null;
   const styleErrorPassRepiet =
      ripidePasword.isDirty && !ripidePasword.inputValid
         ? { borderBottom: '1px solid red' }
         : null;

   return (
      <div className="form-log">
         <div className="form-log__login reg">Załóż konto</div>
         <div className="decoration reg-d"></div>
         <div className="form-log__input reg-i">
            <label className="label" htmlFor="mail">
               Email
            </label>
            <input
               onChange={(e) => email.onChange(e)}
               onBlur={(e) => email.onBlur(e)}
               value={email.value}
               type="text"
               className="input"
               name="mail"
               style={styleErrorMail}
            ></input>
            {(email.isDirty && email.isEmpty && (
               <div className="form-registr" style={{ gridRowStart: 3 }}>
                  Email nie może byc pusty
               </div>
            )) ||
               (email.isDirty && email.minEmptyError && (
                  <div className="form-registr" style={{ gridRowStart: 3 }}>
                     Podany email jest za krótki!
                  </div>
               )) ||
               (email.isDirty && email.emailError && (
                  <div className="form-registr" style={{ gridRowStart: 3 }}>
                     Podany email jest nieprawidłowy!
                  </div>
               ))}
            <label className="label" htmlFor="pass">
               Hasło
            </label>
            <input
               onChange={(e) => password.onChange(e)}
               onBlur={(e) => password.onBlur(e)}
               value={password.value}
               type="password"
               className="input"
               name="pass"
               style={styleErrorPass}
            ></input>
            {(password.isDirty && password.isEmpty && (
               <div className="form-registr" style={{ gridRowStart: 6 }}>
                  Hasło nie może byc puste!
               </div>
            )) ||
               (password.isDirty && password.minEmptyError && (
                  <div className="form-registr" style={{ gridRowStart: 6 }}>
                     Podane hasło jest za krótkie!
                  </div>
               ))}
            <label className="label" htmlFor="ripidepass">
               Powtórz hasło
            </label>
            <input
               onChange={(e) => ripidePasword.onChange(e)}
               onBlur={(e) => ripidePasword.onBlur(e)}
               value={ripidePasword.value}
               type="password"
               className="input"
               name="ripidepass"
               style={styleErrorPassRepiet}
            ></input>
            {(ripidePasword.isDirty && ripidePasword.isEmpty && (
               <div className="form-registr" style={{ gridRowStart: 9 }}>
                  Hasło nie może byc puste!
               </div>
            )) ||
               (ripidePasword.isDirty && ripidePasword.minEmptyError && (
                  <div className="form-registr" style={{ gridRowStart: 9 }}>
                     Podane hasło jest za krótkie!
                  </div>
               )) ||
               (ripidePasword.isDirty &&
                  password.value !== ripidePasword.value && (
                     <div className="form-registr" style={{ gridRowStart: 9 }}>
                        Podane hasła nie są takie same!
                     </div>
                  ))}
         </div>
         <div className="form-log__button">
            <Link to="/logowanie" className="log-link">
               Zaloguj
            </Link>
            <button
               disabled={
                  !email.inputValid ||
                  !password.inputValid ||
                  !ripidePasword.inputValid
               }
               className="button-btn"
            >
               Załóż konto
            </button>
         </div>
      </div>
   );
};
