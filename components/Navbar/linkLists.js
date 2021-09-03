import {
    AiFillHome,
    AiFillStop,
    AiOutlineHome,
    AiOutlineStop,
} from "react-icons/ai";
import { IoStatsChartOutline, IoStatsChartSharp } from "react-icons/io5";
import {
    // RiVirusLine,
    // RiVirusFill,
    RiGitlabLine,
    RiGitlabFill,
} from "react-icons/ri";
import { HiOutlineNewspaper, HiNewspaper } from "react-icons/hi";

export default [
    { path: "overview", icon: <AiOutlineHome />, activeIcon: <AiFillHome /> },
    {
        path: "statistics",
        icon: <IoStatsChartOutline />,
        activeIcon: <IoStatsChartSharp />,
    },
    // { path: "symptoms", icon: <RiVirusLine />, activeIcon: <RiVirusFill /> },
    { path: "symptoms", icon: <RiGitlabLine />, activeIcon: <RiGitlabFill /> },
    { path: "prevention", icon: <AiOutlineStop />, activeIcon: <AiFillStop /> },
    { path: "news", icon: <HiOutlineNewspaper />, activeIcon: <HiNewspaper /> },
];
