import React from 'react';
import {
    Container,
    DescrWrapper,
    Title,
    Descr,
    Stack,
    Link,
    Img,
} from './card.style';

interface IStack {
    id: number;
    stack: string;
    color: string;
}

interface ICard {
    title: string;
    stack: IStack[];
    img: string;
}

const Card: React.FC<ICard> = ({ title, stack, img }) => {
    return (
        <Container>
            <DescrWrapper>
                <Title>{title}</Title>
                <Descr>Проект реализован на:</Descr>
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
            </DescrWrapper>
            <Img src={img} />
        </Container>
    );
};

export default Card;