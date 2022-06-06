import styled from 'styled-components';

export const Container = styled.div``;

export const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

export const ExtraHeader = styled.p`
    width: 460px;
    font-weight: bold;
    font-size: 40px;
    background-color: #9c5a92;
    background: linear-gradient(74deg, rgba(96, 219, 248, 1) 0%, rgba(156, 90, 146, 1) 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
`;

export const Content = styled.div`
    display: flex;
    justify-content: space-around;
`;

export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 594px;
`;

export const Descr = styled.p.attrs((props: any) => ({
    fontWeight: props.fontWeight || null,
}))`
    font-weight: ${(props) => props.fontWeight};
    font-size: 16px;
    line-height: 21px;
    color: #e0e0e0;
    margin-bottom: 48px;
`;

export const Item = styled.div`
    width: 628px;
    height: 253px;
    background: #ffffff;
    border-radius: 16px;
`;

export const Description = styled.p`
    font-size: 16px;
    line-height: 21px;
    color: #333333;
    margin: 32px;
`;

export const EducationWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const EducationItem = styled.div`
    display: flex;
    justify-content: space-between;
    width: 460px;
    height: 124px;
    border-bottom: 1px solid #9c5a92;
    margin-bottom: 48px;
`;

export const Img = styled.img`
    width: 30px;
    height: 42px;
    margin-right: 16px;
`;

export const ItemWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Title = styled.span`
    width: 372px;
    height: 36px;
    font-weight: bold;
    font-size: 28px;
    color: #ffffff;
    margin-bottom: 12px;
`;

export const EduText = styled.span`
    width: 372px;
    font-size: 16px;
    line-height: 21px;
    color: #e0e0e0;
`;
