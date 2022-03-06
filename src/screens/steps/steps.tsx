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
    Content,
    StepsWrapper,
    Title,
    Descr,
    Wrapper,
    Img,
    PhoneWrapper,
    Phone,
} from './steps.style';

const StepsPage: React.FC = () => {
    return (
        <Container>
            <Header
                text="Удобный процесс работы и правильный результат"
                width="661px"
            />
            <Content>
                <StepsWrapper>
                    <Wrapper flexDirection="row">
                        <Wrapper>
                            <Img src={one} alt="1" />
                        </Wrapper>
                        <Wrapper>
                            <Title>Внимательно изучу техническое задание</Title>
                            <Descr>
                                Сначала, я подробно изучу ТЗ с поставленной
                                задачей и макет с дизайном. Если мне что-то
                                непонятно — я сразу задам вопросы клиенту или
                                менеджеру.
                            </Descr>
                        </Wrapper>
                    </Wrapper>
                    <Wrapper flexDirection="row">
                        <Wrapper>
                            <Img src={two} alt="3" />
                        </Wrapper>
                        <Wrapper>
                            <Title>Декомпозирую задачу</Title>
                            <Descr>
                                Разобью ее на несколько мелких подзадач и
                                приступлю к работе. После выполнения нескольких
                                мелких задач я обязательно сверюсь с
                                руководителем, в том ли направлении я иду.
                            </Descr>
                        </Wrapper>
                    </Wrapper>
                    <Wrapper flexDirection="row">
                        <Wrapper>
                            <Img src={three} alt="3" />
                        </Wrapper>
                        <Wrapper>
                            <Title>Не побоюсь спросить совета</Title>
                            <Descr>
                                Если возник вопрос и я не могу сходу решить его,
                                я попробую разобраться сама. Если не разобралась
                                с проблемой за 2 часа — спрошу коллегу, чтобы не
                                терять время зря.
                            </Descr>
                        </Wrapper>
                    </Wrapper>
                    <Wrapper flexDirection="row">
                        <Wrapper>
                            <Img src={four} alt="3" />
                        </Wrapper>
                        <Wrapper>
                            <Title>Предупждаю, если не успеваю к сроку</Title>
                            <Descr>
                                Если понимаю, что никак не успеваю в назначенный
                                дедлайн, то заранее свяжусь с менеджером по
                                проекту и предупрежу о проблемах.
                            </Descr>
                        </Wrapper>
                    </Wrapper>
                </StepsWrapper>
                <PhoneWrapper>
                    <Phone src={phone} alt="phone" />
                    <Button text="Написать в телеграм" width="258px" />
                </PhoneWrapper>
            </Content>
        </Container>
    );
};

export default StepsPage;