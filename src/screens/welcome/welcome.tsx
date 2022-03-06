import React from 'react';
import Nav from '../../components/nav';
import Button from '../../components/button';
import arrowleft from '../../assets/img/arrow-left.png';
import arrowright from '../../assets/img/arrow-right.png';
import slash from '../../assets/img/slashslash.png';
import {
    Container,
    Name,
    Wrapper,
    ContentSection,
    ContentWrapper,
    Header,
    Description,
    ButtonWrapper,
    Chips,
    Img,
} from './welcome.style';

interface ISkills {
    id: number;
    skill?: string;
    background?: string;
    url?: string;
}

const WelcomePage: React.FC = () => {
    const skills: ISkills[] = [
        {
            id: 1,
            skill: 'JavaScript',
            background: '#ED5A01',
        },
        {
            id: 2,
            skill: 'React',
            background: '#F0CDA7',
        },
        {
            id: 3,
            skill: 'Redux',
            background: '#0277BD',
        },
        {
            id: 4,
            url: `${slash}`,
        },
        {
            id: 5,
            skill: 'Typescript',
            background: '#CC6699',
        },
        {
            id: 6,
            skill: 'CSS3',
            background: '#F86060',
        },
        {
            id: 7,
            skill: 'HTML5',
            background: '#FFD801',
        },
        {
            id: 8,
            skill: 'Kotlin',
            background: '#3499C5',
        },
        {
            id: 9,
            url: `${slash}`,
        },
        {
            id: 10,
            skill: 'Spring',
            background: '#7E60F8',
        },
        {
            id: 11,
            skill: 'ES6',
            background: '#F86060',
        },
        {
            id: 12,
            skill: 'Unit-тестирование',
            background: '#F0CDA7',
        },
    ];

    return (
        <Container>
            <Wrapper>
                <Name>Irina Mikheeva</Name>
                <Nav />
                <Button text="Обсудить проект" />
            </Wrapper>
            <ContentSection>
                <ContentWrapper>
                    <Header>{`< Пишу код под ваши нужды, а не по шаблону >`}</Header>
                    <Description>
                        Меня зовут Михеева Ирина и я fullstack-разработчик.
                        Понимаю поставленные задачи и решаю их самостоятельно на
                        высоком уровне.
                    </Description>
                    <ButtonWrapper>
                        <Button text="Обсудить проект" />
                        <Button
                            text="Посмотреть портфолио"
                            background="#252629"
                            color="#60DBF8"
                            textDecoration="underline"
                        />
                    </ButtonWrapper>
                </ContentWrapper>
                <ContentWrapper
                    flexDirection="row"
                    justifyContent="space-around"
                    width="460px"
                    gap="8px"
                >
                    <Img src={arrowleft} alt="arrow" />
                    {skills.map(({ id, skill, background, url }) => {
                        if (url) return <Img key={id} src={url} alt="slash" />;
                        return (
                            <Chips key={id} background={background}>
                                {skill}
                            </Chips>
                        );
                    })}
                    <Img src={arrowright} alt="arrow" />
                </ContentWrapper>
            </ContentSection>
        </Container>
    );
};

export default WelcomePage;