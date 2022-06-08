import styled from 'styled-components';

export const Btn = styled.button.attrs((props: any) => ({
    background: props.background || '#60DBF8',
    color: props.color || '#f2f2f2',
    textDecoration: props.textDecoration || null,
    border: props.border || 'none',
    width: props.width || '200px',
}))`
    width: ${(props) => props.width};
    height: 53px;
    padding: 12px;
    background: ${(props) => props.background};
    border-radius: 8px;
    border: ${(props) => props.border};
    font-weight: bold;
    font-size: 14px;
    color: ${(props) => props.color};
    text-decoration: ${(props) => props.textDecoration};
    @media (max-width: 899px) {
        width: 25%;
    }
`;
