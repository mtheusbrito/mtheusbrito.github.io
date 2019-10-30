import styled from 'styled-components';
import { useSpring, animated, config } from 'react-spring';

export const Container = styled(animated.nav)`
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    /* background: #2d3436; */
    background: transparent;
    z-index: 1;
    font-size: 1.0rem;
`;
export const FlexContainer = styled.div`
    max-width: 120rem;
    display: flex;
    margin: auto;
    padding: 0 2rem;
    justify-content: space-between;
    height: 4rem;
`;

export const NavLinks = styled(animated.ul)`
    justify-self: end;
    list-style-type: none;
    margin: auto 0;

    & a {
        color: #dfe6e9;
        text-transform: uppercase;
        font-weight: 600;
        border-bottom: 1px solid transparent;
        margin: 0 1.5rem;
        transition: all 300ms linear 0s;
        text-decoration: none;
        cursor: pointer;

        &:hover {
            color: #00ff5f;
            border-bottom: 1px solid #00ff5f;
        }

        @media (max-width: 768px) {
            display: none;
        }
    }
`;

export const BurgerWrapper = styled.div`
    margin: auto 0;

    @media (min-width: 769px) {
        display: none;
    }
`;
