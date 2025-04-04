import {Styled} from './App.styles.ts';
import InputText from "./component/Input.tsx";
import {useState} from "react";
import Button from "./component/Button.tsx";
import Task from "./component/Task.tsx";

interface Task {
    title: string;
}

function App() {
    const [inputValue, setInputValue] = useState("");
    const [tasks, setTasks] = useState<Task[]>([]);
    const handleAddNewTask = () => {
        setTasks([
            ...tasks,
            {title: inputValue}
        ])
        setInputValue("")
    }

    const handleDeleteTask = (title: string) => {
        const filterValues = tasks.filter(item => item.title != title);
        setTasks(filterValues);
    }

    return (
        <Styled.Container>
            <Styled.Wrapper>
                <Styled.Board>
                    <h2>Todo List</h2>
                    <Styled.AddSection>
                        <InputText placeholder="What needs to be done?" value={inputValue}
                                   setInputChange={setInputValue}/>
                        <Button name='Add' onClickEvent={() => handleAddNewTask()} icon={""}/>
                    </Styled.AddSection>
                    <Styled.TaskWrapper data-testid="todo-title">
                        {tasks?.map(task => (
                            <Task key={task.title} title={task.title}
                                  handleDeleteTask={() => handleDeleteTask(task.title)}/>
                        ))}
                    </Styled.TaskWrapper>
                </Styled.Board>
            </Styled.Wrapper>
        </Styled.Container>
    )
}

export default App
