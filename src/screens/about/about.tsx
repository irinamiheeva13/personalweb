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
    return (
        <Container>
            <Header text='Удобный процесс работы и правильный результат' width='661px' />
            <ItemWrapper>
                <Item>
                    <Title>Не использую готовые решения</Title>
                    <Description>
                        Пишу сложный код с алгоритмами, обрабатываю серверные запросы, применяю библиотеки и фреймворки.
                    </Description>
                </Item>
                <Item>
                    <Title>Верстаю и разрабатываю</Title>
                    <Description>
                        Лендинги, SPA (single page applications), интернет-магазины,сайты-портфолио, сайты-визитки,
                        каталоги.
                    </Description>
                </Item>
                <Item>
                    <Title>Движусь к цели!</Title>
                    <Description>
                        Обучение, за которое люди платят деньги, я освоила сама и достигла такого же уровня.
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
                            <TitleStep>Внимательно изучу техническое задание</TitleStep>
                            <Descr>
                                Сначала, я подробно изучу ТЗ с поставленной задачей и макет с дизайном. Если мне что-то
                                непонятно — я сразу задам вопросы клиенту или менеджеру.
                            </Descr>
                        </Wrapper>
                    </Wrapper>
                    <Wrapper flexDirection='row'>
                        <Wrapper>
                            <Img src={two} alt='3' />
                        </Wrapper>
                        <Wrapper>
                            <TitleStep>Декомпозирую задачу</TitleStep>
                            <Descr>
                                Разобью ее на несколько мелких подзадач и приступлю к работе. После выполнения
                                нескольких мелких задач я обязательно сверюсь с руководителем, в том ли направлении я
                                иду.
                            </Descr>
                        </Wrapper>
                    </Wrapper>
                    <Wrapper flexDirection='row'>
                        <Wrapper>
                            <Img src={three} alt='3' />
                        </Wrapper>
                        <Wrapper>
                            <TitleStep>Не побоюсь спросить совета</TitleStep>
                            <Descr>
                                Если возник вопрос и я не могу сходу решить его, я попробую разобраться сама. Если не
                                разобралась с проблемой за 2 часа — спрошу коллегу, чтобы не терять время зря.
                            </Descr>
                        </Wrapper>
                    </Wrapper>
                    <Wrapper flexDirection='row'>
                        <Wrapper>
                            <Img src={four} alt='3' />
                        </Wrapper>
                        <Wrapper>
                            <TitleStep>Предупждаю, если не успеваю к сроку</TitleStep>
                            <Descr>
                                Если понимаю, что никак не успеваю в назначенный дедлайн, то заранее свяжусь с
                                менеджером по проекту и предупрежу о проблемах.
                            </Descr>
                        </Wrapper>
                    </Wrapper>
                </StepsWrapper>
                <PhoneWrapper>
                    <Phone src={phone} alt='phone' />
                    <Button text='Написать в телеграм' width='258px' />
                </PhoneWrapper>
            </Content>
        </Container>
    );
};

export default AboutPage;
