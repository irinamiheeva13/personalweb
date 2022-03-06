import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 160px;
    height: 380px;
    box-shadow: 0px 7px 30px #000000;
    border-radius: 16px;
`;

export const ItemWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 80px 40px;
`;

export const Item = styled.div`
    width: 332px;
    height: 220px;
    background: #ffffff;
    border-radius: 16px;
`;

export const Title = styled.h5`
    height: 48px;
    font-weight: bold;
    font-size: 20px;
    line-height: 20px;
    color: #0277bd;
    margin: 32px;
`;

export const Description = styled.p`
    font-size: 16px;
    line-height: 21px;
    color: #333333;
    margin: 0 32px 32px 32px;
`;