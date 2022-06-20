import styled from 'styled-components';

export const Container = styled.div``;

export const Header = styled.h2`
    font-weight: bold;
    font-size: 40px;
    line-height: 56px;
    background-color: #9c5a92;
    background: linear-gradient(74deg, rgba(96, 219, 248, 1) 0%, rgba(156, 90, 146, 1) 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
`;

export const CardWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 20px;
`;

export const Link = styled.a`
    margin-top: 16px;
    font-size: 16px;
    line-height: 21px;
    color: #60dbf8;
    text-decoration: underline;
`;
