import React from 'react';
import PaginationItem from './PaginationItem';

import { Container, ItemsContainer } from './styles';

interface PaginationProps {
  totalContOfRegisters: number;
  registersPerPage?: number;
  currentPage?: number;
  onPageChange: (page: number) =>void;
}
const siblingsCount  = 1 ;

function generatePagesArray(from: number, to: number){
  return [...new Array(siblingsCount)].map((_, index)=>{
    return from + index +1;
  }).filter(page => page > 0)
}

const Pagination: React.FC<PaginationProps> = ({totalContOfRegisters, currentPage= 1, onPageChange,
registersPerPage = 10 }) => {

  const lastPage = Math.floor(totalContOfRegisters /registersPerPage);

  const previousPage = currentPage > 1 ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage -1): [];
  const nextPages = currentPage < lastPage ? generatePagesArray(currentPage, Math.min(currentPage + siblingsCount, lastPage)) : [];
  
  
  return (
    <Container>
          <div>         
          <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
        </div>
        <ItemsContainer>
          {currentPage > 1 + siblingsCount && (
            <>
              <PaginationItem number={1} onPageChange={onPageChange} />
              {currentPage > 2 + siblingsCount && <span>...</span>}
            </>
          )}

          {previousPage.length > 0 &&
            previousPage.map((page) => {
              return (
                <PaginationItem
                  key={page}
                  number={page}
                  onPageChange={onPageChange}
                />
              );
            })}

          <PaginationItem
            number={currentPage}
            isCurrent
            onPageChange={onPageChange}
          />

          {nextPages.length > 0 &&
            nextPages.map((page) => {
              return (
                <PaginationItem
                  key={page}
                  number={page}
                  onPageChange={onPageChange}
                />
              );
            })}

          {currentPage + siblingsCount < lastPage && (
            <>
              {currentPage + 1 + siblingsCount < lastPage && <span>...</span>}
              <PaginationItem number={lastPage} onPageChange={onPageChange} />
            </>
          )}
        </ItemsContainer>
    </Container>
  );
};

export default Pagination;
