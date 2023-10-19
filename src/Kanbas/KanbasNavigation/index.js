import { Link, useLocation } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";
import { RiDashboard3Fill } from "react-icons/ri";
import { FaBook } from "react-icons/fa";
import { BsFillCalendar2WeekFill } from "react-icons/bs";
import { FaInbox } from "react-icons/fa";
import { AiOutlineClockCircle } from "react-icons/ai";
import { AiOutlineVideoCamera } from "react-icons/ai";
import { IoExitOutline } from "react-icons/io5";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import "./index.css";

function KanbasNavigation() {
    const links = ["Account", "Dashboard", "Courses", "Calendar", "Inbox", "History", "Studio", "Commons", "Help"];
    const linksToIconsMap = {
        Account: <BiUserCircle className="account-icon" size='30' />,
        Dashboard: <RiDashboard3Fill size='30' />,
        Courses: <FaBook size='30' />,
        Calendar: <BsFillCalendar2WeekFill size='30' />,
        Inbox: <FaInbox size='30' />,
        History: <AiOutlineClockCircle size='30' />,
        Studio: <AiOutlineVideoCamera size='30' />,
        Commons: <IoExitOutline size='30' />,
        Help: <AiOutlineQuestionCircle size='30' />,
    };

    const { pathname } = useLocation();
    return (
        <div className="list-group wd-kanbas-navigation" style={{ width: 95 }}>
            <Link to={`/Kanbas/Dashboard`} className="list-group-item">
                <img className="wd-nulogo" src="../../images/NULogo.png" />
            </Link>
            {links.map((link, index) => (
                <Link
                    key={index}
                    to={`/Kanbas/${link}`}
                    className={`list-group-item ${pathname.includes(link) && "active"}`}>
                    <i className={`${link === "Account" && "account"}`}>{linksToIconsMap[link]}</i>
                    <br />
                    {link}
                </Link>
            ))}
        </div>
    );
}
export default KanbasNavigation;