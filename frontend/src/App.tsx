import {Styled} from './App.styles.ts';
import {useState} from "react";
import Task from "./component/Task.tsx";
import InputText from "./component/Input.tsx";
import Button from "./component/Button.tsx";

interface Task {
    id: number;
    title: string;
}

const TaskData: Task[] = [
    {
        id: 1,
        title: "Task 1"
    },
    {
        id: 2,
        title: "Task 2"
    },
]

function App() {
    const [inputValue, setInputValue] = useState("");
    const [tasks, setTasks] = useState<Task[]>(TaskData);

    const handleAddNewTask = () => {
        if (inputValue.trim()) {
            setTasks((prevTasks) => [
                ...prevTasks,
                {id: prevTasks.length + 1, title: inputValue},
            ]);
            setInputValue("");
        }
    };


    const handleChangeInputTask = (taskId: number, value: string) => {
        const updatedTasks = tasks.map(task =>
            task.id === taskId ? {...task, title: value} : task
        );
        setTasks(updatedTasks);
    }

    const onChangeInputAdd = (value: string) => {
        setInputValue(value)
    }

    const handleDeleteTask = (taskId: number) => {
        const filterValues = tasks.filter(item => item.id != taskId);
        setTasks(filterValues);
    }

    return (
        <Styled.Container>
            <Styled.Wrapper>
                <Styled.Board>
                    <h2>Todo List</h2>
                    <Styled.AddSection>
                        <InputText placeholder="What needs to be done?" value={inputValue}
                                   setInputChange={onChangeInputAdd}/>
                        <Button name='Add' onClickEvent={() => handleAddNewTask()}/>
                    </Styled.AddSection>
                    <Styled.TaskWrapper data-testid="todo-title">
                        {tasks.map(task => (
                            <Task key={task.id} title={task.title} idTask={task.id}
                                  handleDeleteTask={() => handleDeleteTask(task.id)}
                                  handleChangeInputTask={handleChangeInputTask}
                            />
                        ))}
                    </Styled.TaskWrapper>
                </Styled.Board>
            </Styled.Wrapper>
        </Styled.Container>
    )
}

export default App
