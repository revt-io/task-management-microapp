import {Styled} from './Input.styles.ts';
import {forwardRef} from "react";

interface InputTextProps {
    placeholder?: string;
    value: string;
    setInputChange: (value: string, taskId?: number) => void;
    id?: number;
    onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>, value: string) => void;
    inputRef?: React.RefObject<(HTMLInputElement | null)[]>;
}

const InputText = forwardRef<HTMLInputElement, InputTextProps>(
    ({placeholder, value, setInputChange, id, onKeyDown, inputRef}: InputTextProps) => {
        const handleRef = (el: HTMLInputElement | null) => {
            if (inputRef && id !== undefined) {
                inputRef.current[id] = el;
            }
        };

        return (
            <Styled.Container>
                <Styled.Input
                    placeholder={placeholder}
                    value={value}
                    ref={handleRef}
                    onChange={(e) => setInputChange(e.target.value, id)}
                    type="text"
                    data-testid={`todo-input-${id || 'no-id'}`}
                    onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => onKeyDown ? onKeyDown(e, value) : undefined}
                />
                <Styled.Span>Enter to save</Styled.Span>
            </Styled.Container>
        );
    }
);


export default InputText;