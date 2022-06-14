import React from 'react';
import Header from '../../components/header/header';
import Button from '../../components/button/button';
import one from '../../assets/img/1.png';
import two from '../../assets/img/2.png';
import three from '../../assets/img/3.png';
import four from '../../assets/img/4.png';
import phone from '../../assets/img/phone.png';
import {
    Container,
    ItemWrapper,
    Item,
    Title,
    Description,
    Content,
    StepsWrapper,
    TitleStep,
    Descr,
    Wrapper,
    Img,
    PhoneWrapper,
    Phone,
} from './about.style';

const AboutPage: React.FC = () => {
    const handleTelegram = (): void => {
        window.open('https://t.me/miheeva', '_blank');
    };

    return (
        <Container>
            <Header text='Smooth work process and immediate results ' width='90%' />
            <ItemWrapper>
                <Item>
                    <Title>Do not use out-of-the-box solutions</Title>
                    <Description>I write customazible and scalable code fitted to your business goals.</Description>
                </Item>
                <Item>
                    <Title>Develop and deploy</Title>
                    <Description>Landing pages, SPA's, online-stores, catalogues etc.</Description>
                </Item>
                <Item>
                    <Title>Always learning</Title>
                    <Description>
                        I keep eyes on the ball and always check for the new technologies and updates.
                    </Description>
                </Item>
            </ItemWrapper>
            <Content>
                <StepsWrapper>
                    <Wrapper flexDirection='row'>
                        <Wrapper>
                            <Img src={one} alt='1' />
                        </Wrapper>
                        <Wrapper>
                            <TitleStep>Technical requirements</TitleStep>
                            <Descr>
                                Firstly I thoroughly look through the prototypes and design (if any) and study the
                                requirements list. In case of any question I discuss the project with the manager.
                            </Descr>
                        </Wrapper>
                    </Wrapper>
                    <Wrapper flexDirection='row'>
                        <Wrapper>
                            <Img src={two} alt='3' />
                        </Wrapper>
                        <Wrapper>
                            <TitleStep>Decomposition</TitleStep>
                            <Descr>
                                I try to decompose the project and set reasonable deadlines for every stage avoiding
                                micromanagement.
                            </Descr>
                        </Wrapper>
                    </Wrapper>
                    <Wrapper flexDirection='row'>
                        <Wrapper>
                            <Img src={three} alt='3' />
                        </Wrapper>
                        <Wrapper>
                            <TitleStep>Ask for an advice</TitleStep>
                            <Descr>
                                I try to maintain a healthy balance between being independent and not being stuck at the
                                task I cannot complete. If I have diffculties I ask my teammates or community for help.
                            </Descr>
                        </Wrapper>
                    </Wrapper>
                    <Wrapper flexDirection='row'>
                        <Wrapper>
                            <Img src={four} alt='3' />
                        </Wrapper>
                        <Wrapper>
                            <TitleStep>Warn beforehand</TitleStep>
                            <Descr>In case of any problems I warn the manager as soon as possible.</Descr>
                        </Wrapper>
                    </Wrapper>
                </StepsWrapper>
                <PhoneWrapper>
                    <Phone src={phone} alt='phone' />
                    <Button text='Message me' width='100%' handleLink={handleTelegram} />
                </PhoneWrapper>
            </Content>
        </Container>
    );
};

export default AboutPage;
