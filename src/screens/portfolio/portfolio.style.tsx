import styled from 'styled-components';

export const Container = styled.div``;

export const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

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

export const Content = styled.div`
    margin-top: 80px;
    display: flex;
    justify-content: space-between;
`;

export const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
`;

export const MainWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 40px;
`;

export const Title = styled.p`
    height: 24px;
    font-weight: bold;
    font-size: 24px;
    line-height: 24px;
    color: #f2f2f2;
`;

export const Descr = styled.p.attrs((props: any) => ({
    fontWeight: props.fontWeight || null,
}))`
    font-weight: ${(props) => props.fontWeight};
    font-size: 16px;
    line-height: 21px;
    color: #e0e0e0;
    margin-bottom: 24px;
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
    margin-top: 16px;
    font-size: 16px;
    line-height: 21px;
    color: #60dbf8;
    text-decoration: underline;
`;

export const Img = styled.img`
    margin-bottom: 48px;
    width: 560px;
    height: 487px;
    border-radius: 16px;
`;
