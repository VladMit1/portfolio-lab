import { Link, Outlet } from 'react-router-dom';

export const Layout = () => {
   return (
      <div className="layout">
         <nav className="layout__form-log">
            <div className="log-links">
               <Link to="/logowanie" className="log-link">
                  Zaloguj
               </Link>
               <Link to="/rejestracja" className="log-link">
                  Załóż konto
               </Link>
               {/*<Link to="/wylogowano" className="log-link">Logout</Link>*/}
            </div>
            <nav className="form__links">
               <Link to="/" className="link">
                  Start
               </Link>
               <a href="#" className="link">
                  {/*//scrolls*/}O co chodzi?
               </a>
               <a href="#" className="link">
                  O nas
               </a>
               <a href="#" className="link">
                  Fundacja i organizacje
               </a>
               <a href="#" className="link">
                  Kontakt
               </a>
            </nav>
         </nav>
         <Outlet />
      </div>
   );
};
