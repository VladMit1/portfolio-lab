import { Link } from 'react-router-dom';

export const Logout = () => {
   return (
      <div className="form-log logout">
         <div className="form-log__login logout">
         Wylogowanie nastąpiło pomyślnie!
         </div>
         <div className="decoration"></div>
         <Link to="/" className="link-logout">
            Strona główna
         </Link>
      </div>
   );
};
