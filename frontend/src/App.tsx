import {Styled} from './App.styles.ts';
import {useEffect, useRef, useState} from "react";
import Task from "./component/Task.tsx";
import InputText from "./component/Input.tsx";
import Button from "./component/Button.tsx";
import axios from "axios";

interface Task {
    id: number;
    title: string;
}


function App() {
    const [inputValue, setInputValue] = useState("");
    const [tasks, setTasks] = useState<Task[]>([]);
    const inputRef = useRef<(HTMLInputElement | null)[]>([]);
    const getTaskData = async () => {
        const response = await axios.get('http://localhost:8080/api/tasks')
        const listData = response.data.sort((a: { id: number; }, b: { id: number; }) => a.id - b.id)
        setTasks(listData)
    }

    useEffect(() => {
        getTaskData();
    }, []);

    const handleAddNewTask = async () => {
        if (inputValue.trim()) {
            const taskData = {
                title: inputValue,
            };
            const response = await axios.post('http://localhost:8080/api/tasks/task', taskData)

            setTasks((prevTasks) => [
                ...prevTasks,
                {id: response.data.id, title: response.data.title},
            ]);
            setInputValue("");
        }
    };


    const handleChangeInputTask = async (taskId: number, value: string) => {
        const taskData = {
            id: taskId,
            title: value,
        };
        const response = await axios.put('http://localhost:8080/api/tasks/task', taskData)
        const updatedTasks = tasks.map(task =>
            task.id === response.data.id ? {...task, title: response.data.title} : task
        );
        updatedTasks.sort((a, b) => a.id - b.id)
        setTasks(updatedTasks);
        if (inputRef.current[taskId]) {
            inputRef.current[taskId]?.blur();
        }
    }


    const onChangeInput = (value: string) => {
        setInputValue(value)
    }

    const onChangeTaskInput = (value: string, taskId: number | undefined) => {
        const updatedTasks = tasks.map(task =>
            task.id === taskId ? {...task, title: value} : task
        );
        setTasks(updatedTasks);
    }

    const handleDeleteTask = async (taskId: number) => {
        await axios.delete(`http://localhost:8080/api/tasks/task/${taskId}`)
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
                                   setInputChange={onChangeInput}/>
                        <Button name='Add' onClickEvent={() => handleAddNewTask()}/>
                    </Styled.AddSection>
                    <Styled.TaskWrapper data-testid="todo-title">
                        {tasks.map((task) => (
                            <Task key={task.id} title={task.title} idTask={task.id}
                                  handleDeleteTask={() => handleDeleteTask(task.id)}
                                  handleChangeInputTask={handleChangeInputTask}
                                  onChangeInput={onChangeTaskInput}
                                  inputRef={inputRef}
                            />
                        ))}
                    </Styled.TaskWrapper>
                </Styled.Board>
            </Styled.Wrapper>
        </Styled.Container>
    )
}

export default App
