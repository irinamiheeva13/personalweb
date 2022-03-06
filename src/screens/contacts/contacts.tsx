import React from 'react';
import facebook from '../../assets/img/facebook.svg';
import instagram from '../../assets/img/instagram.svg';
import github from '../../assets/img/github.png';
import {
    Container,
    Wrapper,
    ContactsWrapper,
    Img,
    Link,
    Text,
} from './contacts.style';

const ContactsPage: React.FC = () => {
    return (
        <Container>
            <Wrapper width="600px" margin="0 auto">
                <ContactsWrapper>
                    <Text marginBottom="48px">
                        <b>Контакты</b>
                    </Text>
                    <Text marginBottom="24px">
                        email: irinamikheeva13@gmail.com
                    </Text>
                    <Text marginBottom="24px">telegram: miheeva </Text>
                    <Wrapper width="136px">
                        <Img src={facebook} alt="facebook" />
                        <Img src={instagram} alt="instagram" />
                        <Img src={github} alt="github" />
                    </Wrapper>
                </ContactsWrapper>
            </Wrapper>
            <Link>
                Прототип и дизайн:
                <a href="https://t.me/ilya_seif"> https://t.me/ilya_seif</a>
            </Link>
        </Container>
    );
};

export default ContactsPage;