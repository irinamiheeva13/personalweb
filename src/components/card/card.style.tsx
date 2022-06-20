import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    width: 550px;
    height: 260px;
    background: #252629;
    box-shadow: 0px 4px 50px #000000;
    border-radius: 16px;
    display: flex;
    justify-content: space-between;
`;

export const Overlay = styled.div<{ wip: boolean }>`
    display: none;
    ${(props: any) => props.wip && `display: block;`}
    ${(props: any) => props.wip && `position: absolute;`}
    ${(props: any) => props.wip && `opacity: 0.9;`}
    ${(props: any) => props.wip && `width: 100%;`}
    ${(props: any) => props.wip && `height: 100%;`}
    ${(props: any) => props.wip && `background-color: #252629;`}
    ${(props: any) => props.wip && `z-index: 1;`}
    ${(props: any) => props.wip && `border-radius: 16px;`}
    span {
        ${(props: any) => props.wip && `display: block;`}
        ${(props: any) => props.wip && `position: absolute;`}
        ${(props: any) => props.wip && `left: 25%;`}
        ${(props: any) => props.wip && `top:  calc(50% - 43px);`}
        ${(props: any) => props.wip && `color: white;`}
        ${(props: any) => props.wip && `font-size: 2rem;`}
    }
`;

export const DescrWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 12px 0 13px 12px;
    position: relative;
`;

export const Title = styled.p`
    height: 24px;
    font-weight: bold;
    font-size: 24px;
    line-height: 24px;
    color: #f2f2f2;
`;

export const Descr = styled.p`
    font-weight: bold;
    font-size: 18px;
    line-height: 24px;
    color: #e0e0e0;
`;

export const Stack = styled.span.attrs((props: any) => ({
    color: props.color || '#60DBF8',
}))`
    font-weight: bold;
    font-size: 16px;
    color: ${(props) => props.color};
    margin-right: 8px;
`;

export const Link = styled.a`
    position: absolute;
    bottom: 16px;
    font-size: 16px;
    line-height: 21px;
    color: #60dbf8;
    text-decoration: underline;
`;

export const Img = styled.img`
    width: 240px;
    height: 100%;
    border-radius: 16px;
`;
