import React from 'react';
import { Btn } from './button.style';

interface IButtonProps {
    text: string;
    background?: string;
    color?: string;
    textDecoration?: string;
    border?: string;
    width?: string;
}

const Button: React.FC<IButtonProps> = ({
    text,
    background,
    color,
    textDecoration,
    border,
    width,
}) => {
    return (
        <Btn
            background={background}
            color={color}
            textDecoration={textDecoration}
            border={border}
            width={width}
        >
            {text}
        </Btn>
    );
};

export default Button;