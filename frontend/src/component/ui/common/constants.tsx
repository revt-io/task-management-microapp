import {MdOutlineDashboard} from "react-icons/md";
import {RiTaskLine} from "react-icons/ri";
import {HiOutlineDocumentReport} from "react-icons/hi";
import {CiSettings} from "react-icons/ci";
import {ReactNode} from "react";


type MenuItem = {
    name: string;
    icon: ReactNode;
};

export const menuItems: MenuItem[] = [
    {
        name: "Dashboard",
        icon: <MdOutlineDashboard/>,
    },
    {
        name: "Tasks",
        icon: <RiTaskLine/>,
    },
    {
        name: "Report",
        icon: <HiOutlineDocumentReport/>,
    },
    {
        name: "Setting",
        icon: <CiSettings/>,
    }
];