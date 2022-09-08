/* eslint-disable no-unused-expressions */
import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import * as Scroll from 'react-scroll';

const ScrollLink = Scroll.Link;
export const Layout = () => {
   const navigate = useNavigate();
   const scroller = Scroll.scroller;

   const goHomeAndScroll = async (e) => {
      if (window.location.href !== '/') {
         await navigate('/');
         await scroller.scrollTo(e.target.getAttribute('scroll'), {
            duration: 500,
            smooth: true,
            offset: +e.target.getAttribute('position')
         });
      }
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
                        onClick={goHomeAndScroll}
                        className="link"
                        to="steps"
                        scroll="steps"
                        spy={true}
                        smooth={true}
                        offset={-50}
                        position={-50}
                        duration={500}
                     >
                        O co chodzi?
                     </ScrollLink>
                     <ScrollLink
                        onClick={goHomeAndScroll}
                        className="link"
                        to="about-us"
                        scroll="about-us"
                        spy={true}
                        smooth={true}
                        offset={-15}
                        position={-15}
                        duration={500}
                     >
                        O nas
                     </ScrollLink>
                     <ScrollLink
                        onClick={goHomeAndScroll}
                        className="link"
                        to="helps"
                        scroll="helps"
                        spy={true}
                        smooth={true}
                        position={-50}
                        offset={-50}
                        duration={500}
                     >
                        Fundacja i organizacje
                     </ScrollLink>
                     <ScrollLink
                        onClick={goHomeAndScroll}
                        className="link"
                        to="contacts"
                        scroll="contacts"
                        position={75}
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
