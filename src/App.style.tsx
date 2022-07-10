import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #252629;
  }
  
`;

export const Section = styled.div`
    font-family: 'Roboto Mono';
    max-width: 1640px;
    margin: 50px 200px;
    @media (min-width: 1680px) {
        min-width: 1640px;
        margin: 50px auto;
    }
    @media (max-width: 1199px) {
        margin: 50px 50px;
    }
`;
export const Wrapper = styled.div`
    margin-top: 26px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 899px) {
        justify-content: flex-start;
        gap: 10px;
        & > button {
            display: none;
        }
    }
`;

export const Name = styled.div`
    width: 15%;
    display: inline-block;
    font-weight: bold;
    font-size: 16px;
    line-height: 21px;
    color: #ffffff;
    @media (max-width: 899px) {
        width: 25%;
    }
`;

export const Hamburger = styled.div`
    display: none;
    @media (max-width: 899px) {
        display: block;
        cursor: pointer;
        position: absolute;
        top: 60px;
        right: 50px;
        height: 21px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        span {
            display: block;
            width: 36px;
            height: 3px;
            background-color: #fff;
        }
    }
`;
