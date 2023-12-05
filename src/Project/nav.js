// import { Link } from "react-router-dom";

// function Nav() {
//     return (
//         <nav className="nav flex-column nav-tabs">
//             <Link className="nav-link" to="../project/signin">Home</Link>
//             <Link className="nav-link" to="">Search</Link>
//             <Link className="nav-link" to="../project/signin">Signin</Link>
//             <Link className="nav-link" to="../project/signup">Signup</Link>
//             <Link className="nav-link" to="../project/account">Account</Link>
//         </nav>
//     );
// }

// export default Nav;

import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
function Nav() {
    const { pathname } = useLocation();
    const links = [
        { to: "/project/home", label: "Home" },
        { to: "/project/search", label: "Search" },
        { to: "/project/signin", label: "Signin" },
        { to: "/project/signup", label: "Signup" },
        { to: "/project/account", label: "Account" },
    ];
    const active = (path) => (pathname.includes(path) ? "active" : "");
    return (
        <div className="list-group">
            {links.map((link) => (
                <Link
                    key={link.to}
                    to={link.to}
                    className={`list-group-item ${active(link.to)}`}
                >
                    {link.label}
                </Link>
            ))}
        </div>
    );
}

export default Nav;