import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
`;

export const ContentSection = styled.div`
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const ContentWrapper = styled.div.attrs((props: any) => ({
    flexDirection: props.flexDirection || 'column',
    width: props.width || '55%',
    justifyContent: props.justifyContent || null,
    gap: props.gap || null,
}))`
    display: flex;
    flex-direction: ${(props) => props.flexDirection};
    width: ${(props) => props.width};
    justify-content: ${(props) => props.justifyContent};
    flex-wrap: wrap;
    gap: ${(props) => props.gap};
`;

export const Header = styled.h1`
    margin-bottom: 32px;
    font-weight: bold;
    font-size: 48px;
    line-height: 56px;
    background-color: #9c5a92;
    background: linear-gradient(74deg, rgba(96, 219, 248, 1) 0%, rgba(156, 90, 146, 1) 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
`;

export const Description = styled.div`
    height: 87px;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    color: #ffffff;
    margin-bottom: 100px;
`;

export const ButtonWrapper = styled.div`
    width: 460px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

export const Chips = styled.div.attrs((props: any) => ({
    background: props.background || '#CC6699',
}))`
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    border-radius: 40px;
    color: #ffffff;
    font-weight: bold;
    font-size: 16px;
    line-height: 21px;
    background: ${(props) => props.background};
    padding: 16px 32px;
`;

export const Img = styled.img`
    width: 54px;
    height: 54px;
`;
