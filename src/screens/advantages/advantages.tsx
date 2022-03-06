import React from 'react';
import {
    Container,
    ItemWrapper,
    Item,
    Title,
    Description,
} from './advantages.style';

const AdvantagesPage: React.FC = () => {
    return (
        <Container>
            <ItemWrapper>
                <Item>
                    <Title>Не использую готовые решения</Title>
                    <Description>
                        Пишу сложный код с алгоритмами, обрабатываю серверные
                        запросы, применяю библиотеки и фреймворки.
                    </Description>
                </Item>
                <Item>
                    <Title>Верстаю и разрабатываю</Title>
                    <Description>
                        Лендинги, SPA (single page applications),
                        интернет-магазины,сайты-портфолио, сайты-визитки,
                        каталоги.
                    </Description>
                </Item>
                <Item>
                    <Title>Движусь к цели!</Title>
                    <Description>
                        Обучение, за которое люди платят деньги, я освоила сама
                        и достигла такого же уровня.
                    </Description>
                </Item>
            </ItemWrapper>
        </Container>
    );
};

export default AdvantagesPage;