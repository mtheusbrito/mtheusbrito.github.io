import React from 'react';

import { PaginationItemContainer } from './styles';

interface PaginationItemProps {
  isCurrent?: boolean;
  number: number;
  onPageChange: (page: number) => void;
}
const PaginationItem: React.FC<PaginationItemProps> = ({
  isCurrent = false,
  number,
  onPageChange,
}) => {
  if(isCurrent){
    return <button disabled>{number}</button>
  }
  return <button onClick={() => onPageChange(number)}>{number}</button>;
};

export default PaginationItem;