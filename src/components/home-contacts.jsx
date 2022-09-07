import React, { useEffect, useState } from 'react';
import { useInput } from '../components/customHooks/hooks';

export const Contact = () => {
   const name = useInput('', { isEmpty: true, minLength: 3, isName: false });
   const email = useInput('', { isEmpty: true, minLength: 3, isEmail: false });
   const massege = useInput('', { isEmpty: true, minLength: 120 });
   const [postForm, setPostForm] = useState(false);
   //--------------Style Error----------------------------------------------------------
   const styleErrorName =
      name.isDirty && !name.inputValid
         ? { borderBottom: '1px solid red' }
         : null;
   const styleErrorMail =
      email.isDirty && !email.inputValid
         ? { borderBottom: '1px solid red' }
         : null;
   const styleErrorMassege =
      massege.isDirty && !massege.inputValid
         ? { borderBottom: '1px solid red' }
         : null;
   //--------------------------------------------------------------------------------------------
   const postMassageAlert200 = (
      <div
         style={{
            color: 'green',
            justifySelf: 'center',
            gridRowStart: 5,
            gridRowEnd: 6,
            textAlign: 'center',
            fontWeight: 700
         }}
      >
         Wiadomość została wysłana!
         <br />
         Wkrótce się skontaktujemy.
      </div>
   );
   //const postMassageAlert400 = (
   //   <div
   //      style={{
   //         color: 'red',
   //         justifySelf: 'center',
   //         gridRowStart: 5,
   //         gridRowEnd: 6,
   //         textAlign: 'center',
   //         fontWeight:700
   //      }}
   //   >
   //      Ups, coś poszło nie tak.
   //   </div>
   //);
   const handleSubmit = async function () {
      try {
         const response = await fetch(
            'https://fer-api.coderslab.pl/v1/portfolio/contact',
            {
               headers: {
                  'Content-Type': 'application/json'
               },

               method: 'POST',
               body: JSON.stringify({
                  name: name.value,
                  email: email.value,
                  message: massege.value
               })
            }
         );
         if (response.status === 200) {
            setPostForm(true);
         } else {
            setPostForm(false);
            console.log('nieRabotajet');
         }
      } catch (error) {
         console.log(error);
      }
   };
   return (
      <div className="contacts">
         <div className="contacts__form">
            <div className="form__title">Skontaktuj się z nami</div>
            <div className="decoration"></div>
            {postForm ? postMassageAlert200 : null}
            <div className="form__inputs">
               <label className="label" htmlFor="name">
                  Wpisz swoje imię
               </label>
               <input
                  className="inputs"
                  type="text"
                  name="name"
                  placeholder="Your name"
                  onChange={(e) => name.onChange(e)}
                  onBlur={(e) => name.onBlur(e)}
                  value={name.value}
                  style={styleErrorName}
               />
               {(name.isDirty && name.isEmpty && (
                  <div
                     className="form-registr"
                     style={{ gridRowStart: 4, gridColumnStart: 1 }}
                  >
                     Imię nie może byc puste
                  </div>
               )) ||
                  (name.isDirty && name.minEmptyError && (
                     <div
                        className="form-registr"
                        style={{ gridRowStart: 4, gridColumnStart: 1 }}
                     >
                        Podane imię jest za krótkie!
                     </div>
                  )) ||
                  (name.isDirty && name.nameError && (
                     <div
                        className="form-registr"
                        style={{ gridRowStart: 4, gridColumnStart: 1 }}
                     >
                        Podane imię jest nieprawidłowe!
                     </div>
                  ))}
               <label className="label" htmlFor="mail">
                  Wpisz swój email
               </label>
               <input
                  className="inputs"
                  type="text"
                  name="mail"
                  placeholder="abc@xyz.pl"
                  onChange={(e) => email.onChange(e)}
                  onBlur={(e) => email.onBlur(e)}
                  value={email.value}
                  style={styleErrorMail}
               />
               {(email.isDirty && email.isEmpty && (
                  <div
                     className="form-registr"
                     style={{ gridRowStart: 4, gridColumnStart: 2 }}
                  >
                     Email nie może byc pusty
                  </div>
               )) ||
                  (email.isDirty && email.minEmptyError && (
                     <div
                        className="form-registr"
                        style={{ gridRowStart: 4, gridColumnStart: 2 }}
                     >
                        Podany email jest za krótki!
                     </div>
                  )) ||
                  (email.isDirty && email.emailError && (
                     <div
                        className="form-registr"
                        style={{ gridRowStart: 4, gridColumnStart: 2 }}
                     >
                        Podany email jest nieprawidłowy!
                     </div>
                  ))}
               <label className="label" htmlFor="textarea">
                  Wpisz swoją wiadomość
               </label>
               <textarea
                  className="textarea"
                  name="textarea"
                  cols="20"
                  rows="4"
                  onChange={(e) => massege.onChange(e)}
                  onBlur={(e) => massege.onBlur(e)}
                  value={massege.value}
                  style={styleErrorMassege}
                  placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
               ></textarea>
               {(massege.isDirty && massege.isEmpty && (
                  <div className="form-registr" style={{ gridRowStart: 10 }}>
                     Wiadomość nie może byc pusta!
                  </div>
               )) ||
                  (massege.isDirty && massege.minEmptyError && (
                     <div className="form-registr" style={{ gridRowStart: 10 }}>
                        Podana wiadomość musi mieć co najmniej 120 znaków!!
                     </div>
                  ))}
               <button
                  disabled={
                     !name.inputValid ||
                     !email.inputValid ||
                     !massege.inputValid
                  }
                  onClick={handleSubmit}
                  className="btn"
               >
                  Wyślij
               </button>
            </div>
         </div>
         <footer className="footer">
            <div className="copyright">Copyright by Coders Lab</div>
            <div className="social-icons">
               <div className="icon"></div>
               <div className="icon"></div>
            </div>
         </footer>
      </div>
   );
};
