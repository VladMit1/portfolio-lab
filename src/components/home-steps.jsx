import { Link } from 'react-router-dom';

export const Steps = ({actualLink}) => {
   return (
      <div className="steps">
         <div className="steps__title">Wystarczą 4 proste kroki</div>
         <div className="decor"></div>
         <div className="steps__instructions">
            <div className="instruction-box">
               <div className="instruction-box__image"></div>
               <div className="instruction-box__title">Wybierz rzeczy</div>
               <div className="instruction-box__decor"></div>
               <div className="instruction-box__descr">
                  ubrania, zabawki, sprzęt i inne
               </div>
            </div>
            <div className="instruction-box">
               <div className="instruction-box__image"></div>
               <div className="instruction-box__title">Spakuj je</div>
               <div className="instruction-box__decor"></div>
               <div className="instruction-box__descr">
                  skorzystaj z worków na śmieci
               </div>
            </div>
            <div className="instruction-box">
               <div className="instruction-box__image"></div>
               <div className="instruction-box__title">
                  Zdecyduj komu chcesz pomóc
               </div>
               <div className="instruction-box__decor"></div>
               <div className="instruction-box__descr">
                  wybierz zaufane miejsce
               </div>
            </div>
            <div className="instruction-box">
               <div className="instruction-box__image"></div>
               <div className="instruction-box__title">Zamów kuriera</div>
               <div className="instruction-box__decor"></div>
               <div className="instruction-box__descr">
                  kurier przyjedzie w dogodnym terminie
               </div>
            </div>
         </div>
         <Link to={actualLink} className="btn">
            ODDAJ <br></br> RZECZY
         </Link>
      </div>
   );
};
