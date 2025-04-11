import {Styled} from "./Task.styles.ts";
import {FaRegTrashAlt} from "react-icons/fa";
import Button from "./Button.tsx";
import InputText from "./Input.tsx";

interface TaskProps {
    title: string;
    handleDeleteTask: (e: number) => void;
    handleChangeInputTask: (taskId: number, value: string) => void;
    idTask: number;
}

const Task = ({
                  title,
                  handleDeleteTask,
                  handleChangeInputTask,
                  idTask,
              }: TaskProps) => {


    return (
        <Styled.Container data-testid="todo-task">
            <Styled.Wrapper>
                <InputText value={title} setInputChange={(value, taskId) => handleChangeInputTask(taskId ?? 0, value)}
                           id={idTask}/>
                <Styled.Symbol>
                    <Button onClickEvent={() => handleDeleteTask(idTask)}
                            icon={<FaRegTrashAlt/>} id={idTask}/>
                </Styled.Symbol>
            </Styled.Wrapper>
        </Styled.Container>
    )
}

export default Task;