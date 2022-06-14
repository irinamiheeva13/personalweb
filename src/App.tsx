import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WelcomePage from './screens/welcome/welcome';
import AdvantagesPage from './screens/about/about';
import PortfolioPage from './screens/portfolio/portfolio';
import EducationPage from './screens/education/education';
import ContactsPage from './screens/contacts/contacts';
import Nav from './components/nav';
import Button from './components/button';
import { GlobalStyle, Section, Name, Wrapper, Hamburger } from './App.style';
import './fonts/fonts.css';

const App: React.FC = () => {
    const [mobFrame, setMobFrame] = useState<boolean>(true);
    const handleActiveMobFrame = (): void => {
        setMobFrame((mobFrame) => !mobFrame);
    };
    const handleTelegram = (): void => {
        window.open('https://t.me/miheeva', '_blank');
    };

    return (
        <Section>
            <GlobalStyle />
            <BrowserRouter>
                <Wrapper>
                    <Name>Irina Mikheeva</Name>
                    <Nav mobFrame={mobFrame} setMobFrame={setMobFrame} />
                    <Button text='Discuss project' width='15%' handleLink={handleTelegram} />
                    <Hamburger onClick={handleActiveMobFrame}>
                        <span />
                        <span />
                        <span />
                    </Hamburger>
                </Wrapper>
                <Routes>
                    <Route path='/' element={<WelcomePage />} />
                    <Route path='/about' element={<AdvantagesPage />} />
                    <Route path='/projects' element={<PortfolioPage />} />
                    <Route path='/experience' element={<EducationPage />} />
                    <Route path='/contacts' element={<ContactsPage />} />
                </Routes>
            </BrowserRouter>
        </Section>
    );
};

export default App;
