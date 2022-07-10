import React from 'react';
import { Container, Item, Overlay } from './nav.style';

interface INav {
    mobFrame: boolean, 
    setMobFrame: React.Dispatch<React.SetStateAction<boolean>>,
}

const Nav: React.FC<INav> = ({ mobFrame, setMobFrame }) => {
    const handleActiveMobFrame = (): void => {
        setMobFrame((mobFrame) => !mobFrame);
    };


    return (
            <Container mobFrame={mobFrame} onClick={handleActiveMobFrame}>
            <Overlay mobFrame={mobFrame}  />
                <Item to='/' className={({ isActive }) => (isActive ? 'active' : '')}>
                    About me
                </Item>
                <Item to='/about' className={({ isActive }) => (isActive ? 'active' : '')}>
                    How I work
                </Item>
                <Item to='/projects' className={({ isActive }) => (isActive ? 'active' : '')}>
                    Projects
                </Item>
                <Item to='/experience' className={({ isActive }) => (isActive ? 'active' : '')}>
                    Experience
                </Item>
                <Item to='/contacts' className={({ isActive }) => (isActive ? 'active' : '')}>
                    Contacts
                </Item>
            </Container>
    );
};

export default Nav;
