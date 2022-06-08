import React from 'react';
import Button from '../../components/button';
import arrowleft from '../../assets/img/arrow-left.png';
import arrowright from '../../assets/img/arrow-right.png';
import { skills } from '../../assets/data';
import {
    Container,
    ContentSection,
    ContentWrapper,
    Header,
    Description,
    ButtonWrapper,
    Chips,
    Img,
} from './welcome.style';

const WelcomePage: React.FC = () => {
    return (
        <Container>
            <ContentSection>
                <ContentWrapper>
                    <Header>{`< Clean scalable code fitted to your needs >`}</Header>
                    <Description>
                        I'm Irina, frontend developer from Moscow. I love building user-friendly interfaces and help
                        teams to deliver great products to clients. If you have any project ideas in your mind - click
                        the big blue button and text me :)
                    </Description>
                </ContentWrapper>
                <ContentWrapper flexDirection='row' justifyContent='space-around' gap='8px'>
                    <Img src={arrowleft} alt='arrow' />
                    {skills.map(({ id, skill, background, url }) => {
                        if (url) return <Img key={id} src={url} alt='slash' />;
                        return (
                            <Chips key={id} background={background}>
                                {skill}
                            </Chips>
                        );
                    })}
                    <Img src={arrowright} alt='arrow' />
                </ContentWrapper>
            </ContentSection>
            <ButtonWrapper>
                <Button text='Discuss project' />
                <Button text='Check portfolio' background='#252629' color='#60DBF8' textDecoration='underline' />
            </ButtonWrapper>
        </Container>
    );
};

export default WelcomePage;
