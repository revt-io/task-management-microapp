import {Styled} from './Button.styles.ts';
import {ReactNode} from 'react';


interface ButtonProps {
    id?: number;
    name?: string;
    onClickEvent: (e?: number) => void;
    icon?: ReactNode;
}

const Button = ({id, onClickEvent, icon, name}: ButtonProps) => {
    return (

        <Styled.Button data-testid="delete-button"
                       onClick={() => onClickEvent(id)}>{icon ? icon : name}</Styled.Button>

    );
};

export default Button;