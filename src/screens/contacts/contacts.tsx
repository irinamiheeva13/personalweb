import React from 'react';
import facebook from '../../assets/img/facebook.png';
import linkedin from '../../assets/img/ll.png';
import github from '../../assets/img/github.png';
import { Container, Wrapper, ContactsWrapper, Img, Text } from './contacts.style';

const ContactsPage: React.FC = () => {
    return (
        <Container>
            <ContactsWrapper>
                <Text>
                    email:
                    <a href='mailto:irinamiheeva13@gmail.com' target='_blank' rel='noreferrer'>
                        irinamiheeva13@gmail.com
                    </a>
                </Text>
                <Text>
                    telegram:
                    <a href='https://t.me/miheeva' target='_blank' rel='noreferrer'>
                        https://t.me/miheeva
                    </a>
                </Text>
                <Wrapper>
                    <a href='https://www.facebook.com/IrinaMikheeva13' target='_blank' rel='noreferrer'>
                        <Img src={facebook} alt='facebook' />
                    </a>
                    <a href='https://www.linkedin.com/in/irinamikheeva/' target='_blank' rel='noreferrer'>
                        <Img src={linkedin} alt='instagram' />
                    </a>
                    <a href='https://github.com/irinamiheeva13/irinamiheeva13' target='_blank' rel='noreferrer'>
                        <Img src={github} alt='github' />
                    </a>
                </Wrapper>
                <Text color='#3399c5'>
                    Design:
                    <a href='https://t.me/ilya_seif' target='_blank' rel='noreferrer'>
                        https://t.me/ilya_seif
                    </a>
                </Text>
            </ContactsWrapper>
        </Container>
    );
};

export default ContactsPage;
