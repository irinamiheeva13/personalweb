import React from 'react';
import { Container, Item } from './nav.style';

const Nav: React.FC = () => {
    return (
        <Container>
            <Item to='/' className={({ isActive }) => (isActive ? 'active' : '')}>
                Обо мне
            </Item>
            <Item to='/about' className={({ isActive }) => (isActive ? 'active' : '')}>
                Как я работаю
            </Item>
            <Item to='/projects' className={({ isActive }) => (isActive ? 'active' : '')}>
                Проекты
            </Item>
            <Item to='/experience' className={({ isActive }) => (isActive ? 'active' : '')}>
                Опыт работы
            </Item>
            <Item to='/contacts' className={({ isActive }) => (isActive ? 'active' : '')}>
                Контакты
            </Item>
        </Container>
    );
};

export default Nav;
