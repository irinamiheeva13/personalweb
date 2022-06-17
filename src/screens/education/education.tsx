import React from 'react';
import Header from '../../components/header/header';
import star from '../../assets/img/star.png';
import {
    Container,
    Content,
    EducationWrapper,
    EducationItem,
    Title,
    Img,
    ItemWrapper,
    EduText,
} from './education.style';

const EducationPage: React.FC = () => {
    return (
        <Container>
            <Header text="It's hard to find a talanted employee. But not impossible" width='100%' />
            <Content>
                <EducationWrapper>
                    <EducationItem>
                        <Img src={star} alt='star' />
                        <ItemWrapper>
                            <Title>Raiffeisen Bank</Title>
                            <EduText>
                                Frontend Developer
                                <br />
                                September 2021 - present time
                            </EduText>
                        </ItemWrapper>
                    </EducationItem>
                    <EducationItem>
                        <Img src={star} alt='star' />
                        <ItemWrapper>
                            <Title>BBDO</Title>
                            <EduText>
                                Junior Frontend Developer
                                <br />
                                July 2020 - December 2020
                            </EduText>
                        </ItemWrapper>
                    </EducationItem>
                    <EducationItem>
                        <Img src={star} alt='star' />
                        <ItemWrapper>
                            <Title>BBDO</Title>
                            <EduText>
                                Project Manager
                                <br />
                                April 2019 - July 2020
                            </EduText>
                        </ItemWrapper>
                    </EducationItem>
                </EducationWrapper>
                <EducationWrapper>
                    <EducationItem>
                        <Img src={star} alt='star' />
                        <ItemWrapper>
                            <Title>MGIMO</Title>
                            <EduText>
                                Master's degree, International relations and affairs
                                <br />
                                Moscow 2015 - 2017
                            </EduText>
                        </ItemWrapper>
                    </EducationItem>
                    <EducationItem>
                        <Img src={star} alt='star' />
                        <ItemWrapper>
                            <Title>Linnaeus University</Title>
                            <EduText>
                                Creativity, Entrepreneurship and Innovation in a Swedish Context
                                <br />
                                Sweden 2016
                            </EduText>
                        </ItemWrapper>
                    </EducationItem>
                    <EducationItem>
                        <Img src={star} alt='star' />
                        <ItemWrapper>
                            <Title>MSLU</Title>
                            <EduText>
                                Bachelor's degree, Political Science
                                <br />
                                Moscow 2011-2015
                            </EduText>
                        </ItemWrapper>
                    </EducationItem>
                </EducationWrapper>
            </Content>
        </Container>
    );
};

export default EducationPage;
