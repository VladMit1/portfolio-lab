/* eslint-disable no-unused-expressions */
import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import * as Scroll from 'react-scroll';

const ScrollLink = Scroll.Link;
export const Layout = () => {
   const navigate = useNavigate();
   const returnHome = (e) => {
      window.location.href === '/' ? navigate('/') : navigate('/') && Outlet;
   };
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
               <Link to="/wylogowano" className="log-link">
                  Logout
               </Link>
            </div>
            <nav className="form__links">
               <Link to="/" className="link">
                  Start
               </Link>
               {
                  <>
                     <ScrollLink
                        onClick={returnHome}
                        className="link"
                        to="steps"
                        spy={true}
                        smooth={true}
                        offset={-50}
                        duration={500}
                     >
                        O co chodzi?
                     </ScrollLink>
                     <ScrollLink
                        onClick={returnHome}
                        className="link"
                        to="about-us"
                        spy={true}
                        smooth={true}
                        offset={-15}
                        duration={500}
                     >
                        O nas
                     </ScrollLink>
                     <ScrollLink
                        onClick={returnHome}
                        className="link"
                        to="helps"
                        spy={true}
                        smooth={true}
                        offset={-50}
                        duration={500}
                     >
                        Fundacja i organizacje
                     </ScrollLink>
                     <ScrollLink
                        onClick={returnHome}
                        className="link"
                        to="contacts"
                        spy={true}
                        smooth={true}
                        offset={75}
                        duration={500}
                     >
                        Kontakt
                     </ScrollLink>
                  </>
               }
            </nav>
         </nav>
         <Outlet />
      </div>
   );
};
