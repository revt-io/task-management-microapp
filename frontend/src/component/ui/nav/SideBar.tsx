import {Styled} from "./SideBar.styles.ts";
import {Button} from "../../Button.tsx";
import {menuItems} from "../common/constants.tsx";
import {BiX} from "react-icons/bi";

interface SideBarProp {
    isSidebarOpen: boolean;
    handleOpenSideBar: () => void;
}

export const SideBar = ({isSidebarOpen, handleOpenSideBar}: SideBarProp) => {
    return (
        <Styled.Container isSidebarOpen={isSidebarOpen}>
            <Styled.Header>
                <Styled.Logo>DApp</Styled.Logo>
                <Button onClickEvent={handleOpenSideBar} name={""}
                        icon={<BiX style={{fill: "#ffffff", fontSize: "2rem"}}/>
                        }/>
            </Styled.Header>
            <Styled.Menu>
                {menuItems.map(item =>
                    <Styled.Item>
                        {item.icon}
                        <span>{item.name}</span>
                    </Styled.Item>
                )}
            </Styled.Menu>
        </Styled.Container>


    );
};

