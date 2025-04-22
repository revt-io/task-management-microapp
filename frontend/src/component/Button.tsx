import {Styled} from './Button.styles.ts';
import {ReactNode} from 'react';


interface ButtonProps {
    id?: number;
    name?: string;
    onClickEvent: (e?: number | string | boolean) => void;
    icon?: ReactNode;
    style?: React.CSSProperties;
}

export const Button = ({id, onClickEvent, icon, name, style}: ButtonProps) => {
    return (

        <Styled.Button data-testid="delete-button"
                       style={style}
                       onClick={() => onClickEvent(id)}>{icon ? icon :
            name}</Styled.Button>

    );
};

