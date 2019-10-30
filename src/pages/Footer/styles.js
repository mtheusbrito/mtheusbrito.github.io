import styled from 'styled-components';
import { useSpring, animated, config } from 'react-spring';
export const Container = styled(animated.div)`
position: fixed;
width: 100%;
bottom:0;
right: 0;
text-align: end;

background: transparent;
z-index: 1;
& p{
    margin:5px;
    color:#FFF;
    font-size: 1.0rem;

}



`;
