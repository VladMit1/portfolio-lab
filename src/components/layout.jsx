import { Link, Outlet } from 'react-router-dom';

export const Layout = () => {
   return (
      <>
         <section className="nav">
            <div className="nav__background"></div>
            <div className="nav__form">
               <div className="form__auth">
                  <Link to="/logowanie" className="form__log">
                     Zaloguj
                  </Link>
                  <Link to="/rejestracja" className="form__log">
                     Register
                  </Link>
                  {/*<Link to="/wylogowano" className="form__log">Logout</Link>*/}
                  <Outlet />
               </div>
               <nav className="form__links">
                  <Link to="/" className="link">
                     Start
                  </Link>
                  <a href="#" className="link">
                     O co chodzi?
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

               <div className="nav__title">
                  <div className="">Zacznij pomagać!</div>
                  <div className="">Oddaj niechciane rzeczy w zaufane ręce</div>
               </div>
               <div className="nav__decoration"></div>
               <div className="nav__buttons">
                  <Link to="/oddaj-rzeczy" className="btn">Oddaj Rzeczy</Link>
                  <Link to="/oddaj-rzeczy" className="btn">ZORGANIZUJ<br/> ZBIÓRKĘ</Link>
               </div>
            </div>
         </section>
         <footer>2022</footer>
      </>
   );
};
