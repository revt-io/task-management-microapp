import {Styled} from './Input.styles.ts';

interface InputTextProps {
    placeholder: string;
    value: string;
    setInputChange: (e: string) => void;
}

const InputText = ({placeholder, value, setInputChange}: InputTextProps) => {
    return (

        <Styled.Input placeholder={placeholder} value={value} onChange={(e) => setInputChange(e.target.value)}
                      type="text"/>

    );
};

export default InputText;