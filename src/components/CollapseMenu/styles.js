import { animated } from 'react-spring';
import styled from 'styled-components';

export const CollapseWrapper = styled(animated.div)`
    background: transparent;
    position: fixed;
    top: 4.5rem;
    left: 0;
    right: 0;
    z-index: 50;
`;

export const NavLinks = styled.ul`

    list-style-type: none;
    padding: 0rem 1rem 2rem 2rem;

    & li {
        transition: all 300ms linear 0s;
    }

    & a {
        font-size: 1rem;
        line-height: 2;
        color: #dfe6e9;
        text-transform: uppercase;
        text-decoration: none;
        cursor: pointer;

        &:hover {
            color: #00ff5f;
            border-bottom: 1px solid #00ff5f;
        }
    }
`;
