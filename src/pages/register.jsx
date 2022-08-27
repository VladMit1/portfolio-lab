import { Link } from 'react-router-dom';

export const Register = () => {
   return (
      <div className="form-log">
         <div className="form-log__login reg">Załóż konto</div>
         <div className="form-log__decoration reg-d"></div>
         <div className="form-log__input reg-i">
            <label className="label" forHTML="mail">
               Email
            </label>
            <input type="text" className="input" name="mail"></input>
            <label className="label" forHTML="pass">
               Hasło
            </label>
            <input type="password" className="input" name="pass"></input>
            <label className="label" forHTML="pass">
               Powtórz hasło
            </label>
            <input type="password" className="input" name="pass"></input>
         </div>
         <div className="form-log__button">
            <Link to="/logowanie" className="log-link">
               Zaloguj
            </Link>
            <button className="button-btn">Załóż konto</button>
         </div>
      </div>
   );
};
