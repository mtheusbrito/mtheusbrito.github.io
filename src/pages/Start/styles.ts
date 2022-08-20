import styled from 'styled-components';

export const Container = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%; 
`;
export const Content = styled.div`
  text-align: center;
  margin: auto;
  display: flex;
  flex-direction: column;
  span.hello {
    line-height: 1.4;
    font-size: 2rem;
    text-transform: uppercase;
    color: ${(props) => props.theme['green-500']};

    b {
      text-transform: initial;
      color: white;
      font-size: 6rem;
    }
  }

  div {
    margin-top: 1rem;
    gap: 0.8rem;
    display: flex;
    flex-direction: column;
  }
`;

export const Footer = styled.div`
  display: flex;
  gap: 0.8rem;
  a {
   color: ${props => props.theme.white};
  }
`;
