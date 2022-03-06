import styled from 'styled-components';

export const Hdr = styled.h1.attrs((props: any) => ({
    width: props.width || null,
}))`
    width: ${(props) => props.width};
    font-weight: bold;
    font-size: 40px;
    line-height: 56px;
    background-color: #9c5a92;
    background: linear-gradient(
        74deg,
        rgba(96, 219, 248, 1) 0%,
        rgba(156, 90, 146, 1) 100%
    );
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
`;