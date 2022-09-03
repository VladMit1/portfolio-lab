import React, { useState, useEffect } from 'react';
import { Pagination } from './pagination';

const Tab = ({ children, active = 0 }) => {
   const [activeTab, setActiveTab] = useState(active);
   const [tabData, setTabData] = useState([]);
   const [currentPage, setCurrentPage] = useState(1);
   const [dataPerPage] = useState(3);

   useEffect(() => {
      let data = [];
      React.Children.forEach(children, (element) => {
         if (!React.isValidElement(element)) return;
         const {
            props: { tab, children }
         } = element;
         data.push({ tab, children });
      });
      setTabData(data);
   }, [children]);

   const lastDataIndex = currentPage * dataPerPage;
   const firstDataIndex = lastDataIndex - dataPerPage;
   const paginate = (pageNumber) => setCurrentPage(pageNumber);
   return (
      <>
         <nav className="helps-inner__nav">
            {tabData.map(({ tab }, i) => (
               <div
                  key={i}
                  className={`nav-link ${i === activeTab ? 'active' : ''}`}
                  onClick={() => setActiveTab(i)}
               >
                  {tab}
               </div>
            ))}
         </nav>
         <div className="helps-inner__index ">
            <div className="index__content">
               {tabData[activeTab] && tabData[activeTab].children[0]}
            </div>
         </div>
         <div className="index__conteiner">
            {tabData[activeTab] &&
               JSON.parse(tabData[activeTab].children[1])
                  .slice(firstDataIndex, lastDataIndex)
                  .map((child, i) => (
                     //---Start pagination ---
                     <div className="index__items" key={i}>
                        <div className="items__info">
                           <div className="item__title">{child.name}</div>
                           <div className="item__subtitle">{child.mission}</div>
                        </div>
                        <div className="items__context">{child.things}</div>
                     </div>
                  ))}
            {tabData[activeTab] && (
               <Pagination
                  dataPerPage={dataPerPage}
                  totalDatas={JSON.parse(tabData[activeTab].children[1]).length}
                  paginate={paginate}
               />
            )}
         </div>
      </>
   );
};
const TabPane = ({ children }) => {
   return { children };
};
Tab.TabPane = TabPane;
export default Tab;
