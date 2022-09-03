import React from 'react';

export const Pagination = ({ dataPerPage, totalDatas, paginate }) => {
   const pageNumber = [];
   for (let i = 1; i <= Math.ceil(totalDatas / dataPerPage); i++) {
      pageNumber.push(i);
   }
   const firstPageNumber = pageNumber.length <= 1 ? 'hidden' : '';
   return (
      <ul className="pagination">
         {pageNumber.map((number, i) => (
            <li className={`page-item ${firstPageNumber}`} key={i}>
               <div className="page-link" onClick={() => paginate(number)}>
                  {number}
               </div>
            </li>
         ))}
      </ul>
   );
};
