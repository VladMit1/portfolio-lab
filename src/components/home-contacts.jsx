export const Contact = () => {
   return (
      <div className="contacts">
         <div className="contacts__form">
            <div className="form__title">Skontaktuj się z nami</div>
            <div className="decoration"></div>
            <div className="form__inputs">
               <label className="label" htmlFor="name" >
                  Wpisz swoje imię
               </label>
               <input className="inputs" type="text" name="name" placeholder="Your name" />
               <label className="label" htmlFor="mail">
                  Wpisz swój email
               </label>
               <input className="inputs" type="text" name="mail" placeholder="abc@xyz.pl"/>
               <label className="label" htmlFor="textarea">
                  Wpisz swoją wiadomość
               </label>
               <textarea
                  className="textarea"
                  name="textarea"
                  id=""
                  cols="20"
                  rows="4"
                  placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
               ></textarea>
               <button type="submit" className="btn">Wyślij</button>
            </div>
         </div>
         <footer className="footer">
            <div className="copyright">
            Copyright by Coders Lab
            </div>
            <div className="social-icons">
               <div className="icon"></div>
               <div className="icon"></div>
            </div>
         </footer>
      </div>
   );
};
