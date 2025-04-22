import {Styled} from "./Task.styles.ts";
import {FaRegTrashAlt} from "react-icons/fa";
import {Button} from "./Button.tsx";
import InputText from "./Input.tsx";

interface TaskProps {
    title: string;
    handleDeleteTask: (e: number) => void;
    handleChangeInputTask: (taskId: number, value: string) => void;
    idTask: number;
    onChangeInput: (value: string, taskId?: number) => void;
    inputRef: React.RefObject<(HTMLInputElement | null)[]>;
}

const Task = ({
                  title,
                  handleDeleteTask,
                  handleChangeInputTask,
                  idTask,
                  onChangeInput,
                  inputRef
              }: TaskProps) => {
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, value: string) => {
        if (e.key === 'Enter') {
            handleChangeInputTask(idTask, value);
        }
    };
    return (
        <Styled.Container data-testid="todo-task">
            <Styled.Wrapper>
                <InputText value={title}
                           setInputChange={(value: string, taskId: number | undefined) => onChangeInput(value, taskId)}
                           id={idTask}
                           onKeyDown={handleKeyDown}
                           inputRef={inputRef}
                />
                <Styled.Symbol>
                    <Button onClickEvent={() => handleDeleteTask(idTask)}
                            icon={<FaRegTrashAlt/>} id={idTask}/>
                </Styled.Symbol>
            </Styled.Wrapper>
        </Styled.Container>
    )
};

export default Task;