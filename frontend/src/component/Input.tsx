import {Styled} from './Input.styles.ts';
import {forwardRef, useState} from "react";

interface InputTextProps {
    placeholder?: string;
    value: string;
    setInputChange: (value: string, taskId?: number) => void;
    id?: number;
    onKeyDown?: ((e: React.KeyboardEvent<HTMLInputElement>, value: string) => void) | undefined;
    inputRef?: React.RefObject<(HTMLInputElement | null)[]>;
}

const InputText = forwardRef<HTMLInputElement, InputTextProps>(
    ({placeholder, value, setInputChange, id, onKeyDown, inputRef}: InputTextProps) => {
        const [isFocused, setIsFocused] = useState<boolean>(false);
        const isKeyDownDefined = !!onKeyDown;
        

        const handleRef = (el: HTMLInputElement | null) => {
            if (inputRef && id !== undefined) {
                inputRef.current[id] = el;
            }
        };
        const handleFocus = () => setIsFocused(true);  // Focus event handler
        const handleBlur = () => setIsFocused(false);

        return (
            <Styled.Container className={isKeyDownDefined ? 'visible' : 'hidden'}>
                <Styled.Input
                    placeholder={placeholder}
                    value={value}
                    ref={handleRef}
                    onChange={(e) => setInputChange(e.target.value, id)}
                    type="text"
                    data-testid={`todo-input-${id || 'no-id'}`}
                    onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => onKeyDown ? onKeyDown(e, value) : undefined}
                    className={isKeyDownDefined ? 'visible' : 'hidden'}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                />
                <Styled.Span className={isKeyDownDefined && isFocused ? 'visible' : 'hidden'}>Enter to
                    save</Styled.Span>
            </Styled.Container>
        );
    }
);


export default InputText;