import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display:flex;
  flex-direction: row;
  gap: 6px;
  justify-content: space-between;
  
  
`;

export const ItemsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  span {
    text-align: center;
  }
  button {
    border-radius: 0.4rem;
    border: 1px solid transparent;
    /* padding: 0 0.5rem; */
    min-width: 2rem;
    color: ${(props) => props.theme['green-500']};
    background: ${(props) => props.theme['white']};
    cursor: pointer;

    &:disabled {
      cursor: not-allowed;
      color: ${(props) => props.theme['white']};
      background: ${(props) => props.theme['green-500']};
    }
  }
`;
export const PaginationItemContainer = styled.div`
  
`;
 
