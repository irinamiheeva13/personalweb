import React from 'react';
import { Container, Item } from './nav.style';

const Nav: React.FC = () => {
    return (
        <Container>
            <Item >Обо мне</Item>
            <Item >Как я работаю</Item>
            <Item >Проекты</Item>
            <Item >Проекты</Item>
            <Item >Контакты</Item>
        </Container>
    );
};

export default Nav;