import React from 'react';
import WelcomePage from './screens/welcome/welcome';
import { GlobalStyle, Section } from './App.style';
import './fonts/fonts.css';

const App: React.FC = () => {
    return (
        <Section>
            <GlobalStyle />
            <WelcomePage />
        </Section>
    );
};

export default App;
