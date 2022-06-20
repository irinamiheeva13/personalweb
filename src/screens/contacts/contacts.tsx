import React from 'react';
import facebook from '../../assets/img/facebook.png';
import instagram from '../../assets/img/instagram.png';
import github from '../../assets/img/github.png';
import { Container, Wrapper, ContactsWrapper, Img, Text } from './contacts.style';

const ContactsPage: React.FC = () => {
    return (
        <Container>
            <ContactsWrapper>
                <Text>
                    email: <a href='mailto:irinamiheeva13@gmail.com'>irinamiheeva13@gmail.com</a>
                </Text>
                <Text>
                    telegram: <a href='https://t.me/miheeva'> https://t.me/miheeva</a>{' '}
                </Text>
                <Wrapper>
                    <Img src={facebook} alt='facebook' />
                    <Img src={instagram} alt='instagram' />
                    <Img src={github} alt='github' />
                </Wrapper>
                <Text color='#3399c5'>
                    Design:
                    <a href='https://t.me/ilya_seif'> https://t.me/ilya_seif</a>
                </Text>
            </ContactsWrapper>
        </Container>
    );
};

export default ContactsPage;
