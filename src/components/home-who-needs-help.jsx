import SimpleTabs from './hometabs&pagination';

export const Helpes = () => {
   return (
      <div className="helps">
         <div className="helps-inner">
            <div className="helps-inner__title">Komu pomagamy?</div>
            <div className="decoration"></div>
            <SimpleTabs />

            {/*<nav className="helps-inner__nav">
               <div className="nav-link" tabIndex={0}>
                  Fundacjom
               </div>
               <div className="nav-link" tabIndex={0}>
                  Organizacjom pozarządowym
               </div>
               <div className="nav-link" tabIndex={0}>
                  Lokalnym zbiórkom
               </div>
            </nav>*/}
            
            <div className="index__items">
               <div className="items__info">
                  <div className="item__title">Zbiórka “Lorem Ipsum 1”</div>
                  <div className="item__subtitle">
                     Quis varius quam quisque id diam vel quam elementum
                     pulvinar.
                  </div>
               </div>
               <div className="items__context">Egestas, sed, tempus</div>
            </div>
            <div className="index__items">
               <div className="items__info">
                  <div className="item__title">Zbiórka “Lorem Ipsum 1”</div>
                  <div className="item__subtitle">
                     Quis varius quam quisque id diam vel quam elementum
                     pulvinar.
                  </div>
               </div>
               <div className="items__context">Egestas, sed, tempus</div>
            </div>
         </div>
      </div>
   );
};
