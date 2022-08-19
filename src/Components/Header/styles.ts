import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  nav {
    display: flex;
    gap: 0.8rem;
    margin-left: auto;
    a {
      text-decoration: none;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.22rem;
      color: ${(props) => props.theme['gray-100']};
      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;
      &:hover {
        border-bottom: 3px solid ${(props) => props.theme['green-500']};
      }
      &.active {
        color: ${(props) => props.theme['green-500']};
      }
    }
  }
`;