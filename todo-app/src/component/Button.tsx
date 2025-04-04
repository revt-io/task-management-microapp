import {Styled} from './Button.styles.ts';
import {ReactNode} from 'react';


interface ButtonProps {
    name: string;
    onClickEvent: (e?: string) => void;
    icon: ReactNode;
}

const Button = ({name, onClickEvent, icon}: ButtonProps) => {
    return (

        <Styled.Button onClick={() => onClickEvent(name)}>{icon ? icon : name}</Styled.Button>

    );
};

export default Button;