import React from 'react';
import WelcomePage from './screens/welcome/welcome';
import AdvantagesPage from './screens/advantages/advantages';
import PortfolioPage from './screens/portfolio/portfolio';
import StepsPage from './screens/steps/steps';
import EducationPage from './screens/education/education';
import ContactsPage from './screens/contacts/contacts';
import { GlobalStyle, Section } from './App.style';
import './fonts/fonts.css';

const App: React.FC = () => {
    return (
        <Section>
            <GlobalStyle />
                <WelcomePage />
                <AdvantagesPage />
                <StepsPage />
                <PortfolioPage />
                <EducationPage />
               <ContactsPage />
            
        </Section>
    );
};

export default App;