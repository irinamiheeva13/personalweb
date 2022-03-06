import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 160px;
    margin-bottom: 80px;
`;

export const Wrapper = styled.div.attrs((props: any) => ({
    width: props.width || null,
    margin: props.margin || null,
}))`
    width: ${(props) => props.width};
    margin: ${(props) => props.margin};
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
`;

export const Text = styled.span.attrs((props: any) => ({
    marginBottom: props.marginBottom || null,
}))`
    margin-bottom: ${(props) => props.marginBottom};
    font-size: 16px;
    color: #ffffff;
`;

export const ContactsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
`;

export const Img = styled.img`
    width: 24px;
    height: 24px;
`;

export const Link = styled.div`
    width: 400px;
    margin: 0 auto;
    font-size: 16px;
    color: #3499c5;
    a {
        font-weight: bold;
        font-size: 16px;
        color: #3499c5;
        text-decoration: none;
    }
`;