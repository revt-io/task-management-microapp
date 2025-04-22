import {Styled} from "./Header.styles.ts";
import {Button} from "../component/Button.tsx";
import {TiThMenu} from "react-icons/ti";

interface HeaderProps {
    handleOpenSideBar: () => void;
    isSidebarOpen: boolean;
}

const Header = ({handleOpenSideBar}: HeaderProps) => {

    return (
        <Styled.Container>
            <Styled.Wrapper>
                <Button onClickEvent={handleOpenSideBar} name={""} icon={<TiThMenu style={{fontSize: "1.5rem"}}/>}/>
                <Button onClickEvent={handleOpenSideBar} name={"New Task"}
                        style={{color: "#ffffff", backgroundColor: "#28A745", padding: "0.3rem 1rem"}}/>
            </Styled.Wrapper>
        </Styled.Container>
    )
}


export default Header;