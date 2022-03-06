import styled from 'styled-components';

export const Container = styled.div`
    width: 560px;
    height: 260px;
    background: #252629;
    box-shadow: 0px 4px 50px #000000;
    border-radius: 16px;
    display: flex;
    justify-content: space-between;
`;

export const DescrWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 16px 0 16px 16px;
    position: relative;
`;

export const Title = styled.p`
    height: 24px;
    font-weight: bold;
    font-size: 24px;
    line-height: 24px;
    color: #f2f2f2;
`;

export const Descr = styled.p`
    font-weight: bold;
    font-size: 18px;
    line-height: 24px;
    color: #e0e0e0;
`;

export const Stack = styled.span.attrs((props: any) => ({
    color: props.color || '#60DBF8',
}))`
    font-weight: bold;
    font-size: 16px;
    color: ${(props) => props.color};
    margin-right: 8px;
`;

export const Link = styled.a`
    position: absolute;
    bottom: 16px;
    font-size: 16px;
    line-height: 21px;
    color: #60dbf8;
    text-decoration: underline;
`;

export const Img = styled.img`
    width: 260px;
    height: 260px;
    border-radius: 16px;
`;