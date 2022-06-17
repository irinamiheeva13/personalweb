import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.div`
    display: flex;
    justify-content: space-around;
    @media (max-width: 853px) {
        flex-direction: column;
    }
`;

export const EducationWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const EducationItem = styled.div`
    display: flex;
    justify-content: flex-start;
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
