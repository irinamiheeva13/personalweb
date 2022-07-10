import React from 'react';
import Card from '../../components/card/card';
import Header from '../../components/header/header';
import web from '../../assets/img/web.png';
import book from '../../assets/img/book.png';
import { CardWrapper, Container } from './portfolio.style';

const PortfolioPage: React.FC = () => {
    const stack = [
        {
            id: 1,
            stack: 'REACT',
            color: '#60DBF8',
        },
        {
            id: 2,
            stack: 'TYPESCRIPT',
            color: '#FBD921',
        },
        {
            id: 3,
            stack: 'STYLED-COMPONENTS',
            color: '#dfb1d0 ',
        },
    ];

    const stackBookTracker = [
        {
            id: 1,
            stack: 'REACT',
            color: '#60DBF8',
        },
        {
            id: 2,
            stack: 'TYPESCRIPT',
            color: '#FBD921',
        },
        {
            id: 3,
            stack: 'GRAPHQL',
            color: '#60DBF8 ',
        },
        {
            id: 4,
            stack: 'APOLLO',
            color: '#fbfbfb ',
        },
        {
            id: 5,
            stack: 'MUI',
            color: '#dfb1d0 ',
        },
    ];
    return (
        <Container>
            <Header text='From idea to execution' />
            <CardWrapper>
                <Card
                    title='PERSONAL WEBSITE'
                    stack={stack}
                    img={web}
                    link='https://github.com/irinamiheeva13/personalweb'
                    wip={false}
                />
                <Card title='BOOK TRACKER' stack={stackBookTracker} img={book} wip={true} />
            </CardWrapper>
        </Container>
    );
};

export default PortfolioPage;
