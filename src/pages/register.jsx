/* eslint-disable no-self-compare */
import React from 'react';
import { useInput } from '../components/customHooks/hooks';

import { Link } from 'react-router-dom';

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
      (ripidePasword.isDirty && !ripidePasword.inputValid) ||
      password.value !== ripidePasword.value
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
