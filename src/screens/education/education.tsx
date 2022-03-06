import React from 'react';
import Header from '../../components/header/header';
import Button from '../../components/button/button';
import star from '../../assets/img/star.png';
import {
    Container,
    HeaderWrapper,
    ExtraHeader,
    TextWrapper,
    Descr,
    Item,
    Description,
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
            <HeaderWrapper>
                <Header
                    text="Найти талантливого  работника очень сложно"
                    width="560px"
                />
                <ExtraHeader>НО МОЖНО!</ExtraHeader>
            </HeaderWrapper>
            <Content>
                <TextWrapper>
                    <Descr>
                        С сентября 2020 начала самостоятельно изучать фронтенд —
                        от основ верстки до нативного JavaScript и библиотеки
                        React.
                        <br />
                        <br />
                        До этого 3 года работала аккаунт-менеджером в рекламных
                        агентствах R:TA и BBDO. Я полностью сопровождада проекты
                        — от получения брифов до сдачи кейса на фестивали. Я
                        занималась стратегическим планированием, подготовкой
                        годовой коммуникации для брендов, формированием
                        аналитических отчетов по кампаниям, разработкой
                        медиапланов и бюджетов. Вела ежедневную коммуникацию как
                        с клиентом, так и с командой, контролировала все
                        тайминги и дедлайны по проектам.
                        <br />
                        <br />
                        За время работы менеджером я отлично прокачала soft
                        skills, научилась грамотно распределять свои ресурсы и
                        ресурсы команды, быстро реагировать на возникающие
                        проблемы.
                    </Descr>

                    <Item>
                        <Description>
                            В мир IT меня привело желание научиться создавать
                            своими руками, возможность влиять на функционал и
                            внешний вид продукта.
                            <br />
                            <br />
                            Я увидела, как с помощью логики и алгоритмов можно
                            решать реальные проблемы — от создания понятных и
                            удобных интерфейсов до построения
                            многофункциональных приложений.
                            <br />
                            <br />
                            Это то, в чем я хочу развиваться.
                        </Description>
                    </Item>
                </TextWrapper>
                <EducationWrapper>
                    <EducationItem>
                        <Img src={star} alt="star" />
                        <ItemWrapper>
                            <Title>МГИМО (У) МИД РОССИИ</Title>
                            <EduText>
                                Магистр Международных Отношений
                                <br />
                                Москва 2015 - 2017
                            </EduText>
                        </ItemWrapper>
                    </EducationItem>
                    <EducationItem>
                        <Img src={star} alt="star" />
                        <ItemWrapper>
                            <Title>Linnaeus University</Title>
                            <EduText>
                                Creativity, Entrepreneurship and Innovation in a
                                Swedish Context
                                <br />
                                Швеция 2016
                            </EduText>
                        </ItemWrapper>
                    </EducationItem>
                    <EducationItem>
                        <Img src={star} alt="star" />
                        <ItemWrapper>
                            <Title>МГЛУ им. Мориса Тереза</Title>
                            <EduText>
                                Бакалавр Политологии
                                <br />
                                Москва 2011-2015
                            </EduText>
                        </ItemWrapper>
                    </EducationItem>
                    <Button text="Написать в телеграм" />
                </EducationWrapper>
            </Content>
        </Container>
    );
};

export default EducationPage;