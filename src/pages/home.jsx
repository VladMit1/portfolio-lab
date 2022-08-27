import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { ThreeColumn } from '../components/home-threeColumn';

export const Home = () => {
   const [satatus, setSatatus] = useState(false);

   const actuallyStatus = satatus !== false ? '/oddaj-rzeczy' : '/logowanie';
   return (
      <div className="home">
         <div className="home__background"></div>
         <div className="home__form">
            <div className="form__title">
               Zacznij pomagać!<br></br>Oddaj niechciane rzeczy w zaufane ręce
            </div>

            <div className="form__decoration"></div>
            <div className="form__buttons">
               <Link to={actuallyStatus} className="btn">
                  ODDAJ <br></br> RZECZY
               </Link>
               <Link to="/oddaj-rzeczy" className="btn">
                  ZORGANIZUJ
                  <br /> ZBIÓRKĘ
               </Link>
            </div>
         </div>
         <ThreeColumn />
      </div>
   );
};
