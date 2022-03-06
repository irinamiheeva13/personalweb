import styled from 'styled-components';


export const Container = styled.div`
    margin-left: 420px;
    width: 499px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Item = styled.a`
    height: 21px;
    font-weight: bold;
    font-size: 16px;
    line-height: 21px;
    color: #ffffff;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    background: #252629;
    border: none;
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    }
`;