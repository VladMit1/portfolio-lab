import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

export const Login = () => {
   const [email, setEmail] = useState('');
   const [pass, setPass] = useState('');
   const [emailDirty, setEmailDirty] = useState(false);
   const [passDirty, setPassDirty] = useState(false);
   const [emailError, setEmailError] = useState('Email nie może  byc pusty');
   const [passError, setPassError] = useState('Hasło nie może być puste');
   const [formValid, setFormValid] = useState(false);

   const correctEmail = emailDirty && emailError ? 'inputincorrect' : 'input';
   const correctPass = passDirty && passError ? 'inputincorrect' : 'input';

   useEffect(() => {
      if (emailError || passError) {
         setFormValid(false);
      } else {
         setFormValid(true);
      }
   }, [emailError, passError]);

   const emailHandler = (e) => {
      setEmail(e.target.value);
      const re =
         /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      if (!re.test(String(e.target.value).toLowerCase())) {
         setEmailError('podany email jest nieprawidłowy');
         if (e.target.value.length === 0) {
            setEmailError('Email nie może  byc pusty');
         }
      } else {
         setEmailError('');
      }
   };

   const passHandler = (e) => {
      setPass(e.target.value);
      if (e.target.value.length < 6) {
         setPassError('Podane hasło jest za krótkie');
         if (!e.target.value) {
            setPassError('Hasło nie może być puste');
         }
      } else {
         setPassError('');
      }
   };

   const blurHandler = (e) => {
      switch (e.target.name) {
         case 'email':
            setEmailDirty(true);
            break;
         case 'pass':
            setPassDirty(true);
            break;
         default:
            break;
      }
   };

   return (
      <div className="form-log">
         <div className="form-log__login">Zaloguj się</div>
         <div className="decoration"></div>
         <div className="form-log__input">
            <label className="label" htmlFor="email">
               Email
            </label>
            <input
               onChange={(e) => emailHandler(e)}
               value={email}
               onBlur={(e) => blurHandler(e)}
               type="text"
               className={correctEmail}
               name="email"
            ></input>
            {emailDirty && emailError && (
               <div className="error" style={{ gridRowStart: 3 }}>
                  {emailError}
               </div>
            )}
            <label className="label" htmlFor="pass">
               Hasło
            </label>
            <input
               onChange={(e) => passHandler(e)}
               value={pass}
               onBlur={(e) => blurHandler(e)}
               type="password"
               className={correctPass}
               name="pass"
            ></input>
            {passDirty && passError && (
               <div className="error" style={{ gridRowStart: 6 }}>
                  {passError}
               </div>
            )}
         </div>
         <div className="form-log__button">
            <Link to="/rejestracja" className="log-link">
               Załóż konto
            </Link>
            <button disabled={!formValid} className="button-btn">
               Zaloguj się
            </button>
         </div>
      </div>
   );
};
