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
    margin: 50px 100px;
    @media (min-width: 1680px) {
        min-width: 1640px;
        margin: 50px auto;
    }
`;
export const Wrapper = styled.div`
    margin-top: 26px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Name = styled.span`
    display: inline-block;
    position: absolute;
    font-weight: bold;
    font-size: 16px;
    line-height: 21px;
    color: #ffffff;
`;
