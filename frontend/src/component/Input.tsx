import {Styled} from './Input.styles.ts';

interface InputTextProps {
    placeholder?: string;
    value: string;
    setInputChange: (value: string, id?: number) => void;
    id?: number;
}

const InputText = ({placeholder, value, setInputChange, id}: InputTextProps) => {
    return (
        <Styled.Input placeholder={placeholder} value={value} onChange={(e) => setInputChange(e.target.value, id)}
                      type="text" data-testid={`todo-input-${id || 'no-id'}`}/>
    );
};

export default InputText;