import {Styled} from './App.styles.ts';
import Header from "./Layouts/Header.tsx";
import {TaskList} from "./Layouts/TaskList.tsx";
import {SideBar} from "./component/ui/nav/SideBar.tsx";
import {useState} from "react";
import {TaskDetail} from "./component/TaskDetail.tsx";


function App() {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const handleOpenSideBar = () => {
        setSidebarOpen((prev) => !prev);
    }

    return (
        <Styled.Container>
            <Header isSidebarOpen={isSidebarOpen} handleOpenSideBar={handleOpenSideBar}/>
            <Styled.MainContent>
                <SideBar isSidebarOpen={isSidebarOpen} handleOpenSideBar={handleOpenSideBar}/>
                <TaskList/>
                <TaskDetail/>
            </Styled.MainContent>
        </Styled.Container>
    )
}

export default App
