import React from 'react';
import facebook from '../../assets/img/facebook.png';
import instagram from '../../assets/img/instagram.png';
import github from '../../assets/img/github.png';
import { Container, Wrapper, ContactsWrapper, Img, Link, Text } from './contacts.style';

const ContactsPage: React.FC = () => {
    return (
        <Container>
            <ContactsWrapper>
                <Text marginBottom='24px'>email: irinamiheeva13@gmail.com</Text>
                <Text marginBottom='24px'>telegram: @miheeva </Text>
                <Wrapper width='136px'>
                    <Img src={facebook} alt='facebook' />
                    <Img src={instagram} alt='instagram' />
                    <Img src={github} alt='github' />
                </Wrapper>
            </ContactsWrapper>

            <Link>
                Design and prototyping:
                <a href='https://t.me/ilya_seif'> https://t.me/ilya_seif</a>
            </Link>
        </Container>
    );
};

export default ContactsPage;
