import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WelcomePage from './screens/welcome/welcome';
import AdvantagesPage from './screens/about/about';
import PortfolioPage from './screens/portfolio/portfolio';
import EducationPage from './screens/education/education';
import ContactsPage from './screens/contacts/contacts';
import Nav from './components/nav';
import Button from './components/button';
import { GlobalStyle, Section, Name, Wrapper } from './App.style';
import './fonts/fonts.css';

const App: React.FC = () => {
    return (
        <Section>
            <GlobalStyle />
            <BrowserRouter>
                <Wrapper>
                    <Name>Irina Mikheeva</Name>
                    <Nav />
                    <Button text='Обсудить проект' />
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
