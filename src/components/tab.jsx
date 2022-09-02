import React, { useState, useEffect } from 'react';

const Tab = ({ children, active = 0 }) => {
   const [activeTab, setActiveTab] = useState(active);
   const [tabData, setTabData] = useState([]);

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
      console.log(children);
   }, [children]);
   //console.log(description);
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

         <div className="">
            {tabData[activeTab] &&
               JSON.parse(tabData[activeTab].children[1]).map((child, i) => (
                  <div className="" key={i}>{child.name}</div>
               ))}
         </div>
      </>
   );
};
const TabPane = ({ children }) => {
   return { children };
};
Tab.TabPane = TabPane;
export default Tab;
