import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 50px;
`;

export const ItemWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 40px 40px;
    box-shadow: 0px 7px 30px #000000;
    border-radius: 16px;
    @media (max-width: 1500px) {
        padding: 30px 30px;
        gap: 12px;
    }
    @media (max-width: 799px) {
        flex-wrap: wrap;
        justify-content: center;
        gap: 24px;
    }
    @media (max-width: 730px) {
        flex-direction: column;
        margin: 0 auto;
        width: 50%;
    }
    @media (max-width: 560px) {
        width: inherit;
    }
`;

export const Item = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    width: 332px;
    height: 220px;
    background: #ffffff;
    border-radius: 16px;
    @media (max-width: 799px) {
        width: 100%;
    }
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

export const Content = styled.div`
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
`;

export const StepsWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const TitleStep = styled.p`
    height: 26px;
    font-weight: bold;
    font-size: 26px;
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

export const Wrapper = styled.div.attrs((props: any) => ({
    flexDirection: props.flexDirection || 'column',
}))`
    display: flex;
    flex-direction: ${(props) => props.flexDirection};
    margin-right: 24px;
`;

export const DottedLine = styled.div`
    margin: 1px 0 0 36px;
    width: 1px;
    height: 40px;
    transform: rotate(180deg);
    background: linear-gradient(74deg, rgba(96, 219, 248, 1) 0%, rgba(156, 90, 146, 1) 100%);
`;

export const Img = styled.img`
    margin-top: 26px;
    width: 76px;
    height: 76px;
`;

export const PhoneWrapper = styled.div`
    display: flex;
    flex-direction: column;
    @media (max-width: 680px) {
        display: none;
    }
`;

export const Phone = styled.img`
    width: 258px;
    height: 526px;
    margin-bottom: 60px;
`;
