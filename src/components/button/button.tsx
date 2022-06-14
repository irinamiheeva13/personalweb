import React from 'react';
import { Btn } from './button.style';

interface IButtonProps {
    text: string;
    background?: string;
    color?: string;
    textDecoration?: string;
    border?: string;
    width?: string;
    handleLink?: () => void;
}

const Button: React.FC<IButtonProps> = ({ text, background, color, textDecoration, border, width, handleLink }) => {
    return (
        <Btn
            background={background}
            color={color}
            textDecoration={textDecoration}
            border={border}
            width={width}
            onClick={handleLink}>
            {text}
        </Btn>
    );
};

export default Button;
