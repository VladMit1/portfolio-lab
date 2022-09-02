import { Link } from 'react-router-dom';

export const Login = () => {
   return (
      <div className="form-log">
         <div className="form-log__login">Zaloguj się</div>
         <div className="decoration"></div>
         <div className="form-log__input">
            <label className="label" htmlFor="mail">
               Email
            </label>
            <input type="text" className="input" name="mail"></input>
            <label className="label" htmlFor="pass">
               Hasło
            </label>
            <input type="password" className="input" name="pass"></input>
         </div>
         <div className="form-log__button">
            <Link to="/rejestracja" className="log-link">
               Załóż konto
            </Link>
            <button className="button-btn">Zaloguj się</button>
         </div>
      </div>
   );
};
