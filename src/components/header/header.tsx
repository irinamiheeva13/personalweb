import React from 'react';
import { Hdr } from './header.style';

interface IHeader {
    text: string;
    width?: string;
}

const Header: React.FC<IHeader> = ({ text, width }) => {
    return <Hdr width={width}> {text}</Hdr>;
};

export default Header;