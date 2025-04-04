import {Styled} from "./Task.styles.ts";
import {FaRegTrashAlt} from "react-icons/fa";
import Button from "./Button.tsx";

interface TaskProps {
    title: string;
    handleDeleteTask: (e: string) => void;
}

const Task = ({title, handleDeleteTask}: TaskProps) => {

    return (
        <Styled.Container data-testid="todo-task">
            <Styled.Wrapper>
                <Styled.Title>{title}</Styled.Title>
                <Styled.Symbol>
                    <Button name={""} onClickEvent={() => handleDeleteTask(title)} icon={<FaRegTrashAlt/>}/>
                </Styled.Symbol>
            </Styled.Wrapper>
        </Styled.Container>
    )
}

export default Task;