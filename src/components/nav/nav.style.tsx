import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div<{ mobFrame: boolean }>`
    width: 60%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    @media (max-width: 899px) {
        display: none;
        ${(props: any) => props.mobFrame && `display: flex;`}
        ${(props: any) => props.mobFrame && `position: fixed;`}
        ${(props: any) => props.mobFrame && `top: 0;`}
        ${(props: any) => props.mobFrame && `left: 0;`}
        ${(props: any) => props.mobFrame && `opacity: 1;`}
        ${(props: any) => props.mobFrame && `flex-direction: column;`}
        ${(props: any) => props.mobFrame && `justify-content: space-evenly;`}
        ${(props: any) => props.mobFrame && `align-items: center;`}
        ${(props: any) => props.mobFrame && `width: 50%;`}
        ${(props: any) => props.mobFrame && `height: 100vh;`}
        ${(props: any) => props.mobFrame && `transition: ease-in-out 1s;`}
        ${(props: any) => props.mobFrame && `background-color: #252629;`}
        ${(props: any) => props.mobFrame && `z-index: 100;`}
    }
`;

export const Item = styled(NavLink)`
    height: 21px;
    font-weight: bold;
    font-size: 16px;
    line-height: 21px;
    color: #ffffff;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border: none;
    cursor: pointer;
    text-decoration: none;
    &.active {
        color: #3399c5;
    }
    &:hover {
        font-size: 20px;
    }
`;

export const Overlay = styled.div<{ mobFrame: boolean }>`
    display: none;
    @media (max-width: 899px) {
        display: none;
        ${(props: any) => props.mobFrame && `display: block;`}
        ${(props: any) => props.mobFrame && `position: fixed;`}
        ${(props: any) => props.mobFrame && `top: 0;`}
        ${(props: any) => props.mobFrame && `left: 0;`}
        ${(props: any) => props.mobFrame && `opacity: 0.5;`}
        ${(props: any) => props.mobFrame && `width: 100%;`}
        ${(props: any) => props.mobFrame && `height: 100%;`}
        ${(props: any) => props.mobFrame && `background-color: #252629;`}
        ${(props: any) => props.mobFrame && `z-index: -1;`}
    }
`;
