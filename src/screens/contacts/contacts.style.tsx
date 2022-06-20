import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 150px;
`;

export const ContactsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 24px;
`;

export const Wrapper = styled.div.attrs((props: any) => ({
    width: props.width || null,
    margin: props.margin || null,
}))`
    width: ${(props) => props.width};
    margin: ${(props) => props.margin};
    display: flex;
    justify-content: space-between;
    gap: 12px;
`;

export const Text = styled.span.attrs((props: any) => ({
    color: props.color || '#ffffff',
}))`
    font-size: 16px;
    color: ${(props) => props.color};
    a {
        font-weight: bold;
        font-size: 16px;
        color: ${(props) => props.color};
        text-decoration: none;
    }
`;

export const Img = styled.img`
    width: 24px;
    height: 24px;
`;
