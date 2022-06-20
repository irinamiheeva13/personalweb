import React from 'react';
import { Container, DescrWrapper, Title, Descr, Stack, Link, Img, Overlay } from './card.style';

interface IStack {
    id: number;
    stack: string;
    color: string;
}

interface ICard {
    title: string;
    stack: IStack[];
    img: string;
    link?: string;
    wip: boolean;
}

const Card: React.FC<ICard> = ({ title, stack, img, link, wip }) => {
    return (
        <Container>
            <Overlay wip={wip}>
                <span>Work in progress</span>
            </Overlay>
            <DescrWrapper>
                <Title>{title}</Title>
                <Descr>Project stack:</Descr>
                <div>
                    {stack.map(({ id, stack, color }) => {
                        return (
                            <Stack key={id} color={color}>
                                {stack}
                            </Stack>
                        );
                    })}
                </div>
                <Link href={link} target='_blank'>
                    Посмотреть проект
                </Link>
            </DescrWrapper>
            <Img src={img} />
        </Container>
    );
};

export default Card;
