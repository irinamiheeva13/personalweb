import React from 'react';
import Card from '../../components/card/card';
import Header from '../../components/header/header';
import twitter from '../../assets/img/twitter.png';
import got from '../../assets/img/got.png';
import quotes from '../../assets/img/quotes.png';
import preview from '../../assets/img/preview.png';
import {
    CardWrapper,
    Container,
    HeaderWrapper,
    Content,
    Title,
    Descr,
    Stack,
    Link,
    Img,
    MainWrapper,
} from './portfolio.style';

const PortfolioPage: React.FC = () => {
    const stack = [
        {
            id: 1,
            stack: 'REACT',
            color: '#60DBF8',
        },
        {
            id: 2,
            stack: 'TYPESCRIPT',
            color: '#FBD921',
        },
        {
            id: 3,
            stack: 'REDUX',
            color: '#0277BD',
        },
    ];
    return (
        <Container>
            <HeaderWrapper>
                <Header text='От идеи до разработки' />
                {/* <Button
                    text=" Смотреть больше проектов"
                    background="#252629"
                    color="#60DBF8"
                    width="297px"
                    border="1px solid #60DBF8"
                /> */}
            </HeaderWrapper>
            <Content>
                <MainWrapper>
                    <Img src={preview} />
                    <Title>FIND A PAIR</Title>
                    <Descr>
                        Игра на развитие памяти.Игра на развитие памяти.Игра на развитие памяти.Игра на развитие
                        памяти.Игра на развитие памяти.Игра на развитие памяти.Игра на развитие памяти.Игра на развитие
                        памяти.Игра на развитие памяти.
                    </Descr>
                    <Descr fontWeight='bold'>Проект реализован на:</Descr>
                    <div>
                        {stack.map(({ id, stack, color }) => {
                            return (
                                <Stack key={id} color={color}>
                                    {stack}
                                </Stack>
                            );
                        })}
                    </div>
                    <Link>Посмотреть проект</Link>
                </MainWrapper>
                <CardWrapper>
                    <Card title='TWITTERCLONE' stack={stack} img={twitter} />
                    <Card title='GAME OF THRONES DB' stack={stack} img={got} />
                    <Card title='QUOTES' stack={stack} img={quotes} />
                </CardWrapper>
            </Content>
        </Container>
    );
};

export default PortfolioPage;
