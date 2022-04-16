import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCurrentUserData, getIsLoggedIn } from "../store/user";

const Navbar = () => {
    const isLoggedIn = useSelector(getIsLoggedIn());
    const currentUser = useSelector(getCurrentUserData());

    return (
        <nav className="navbar bg-light mb-3">
            <div className="container justify-content-end ">
                {isLoggedIn && (
                    <ul className="nav">
                        <li className="nav-item me-5">
                            {currentUser.userLogin}
                        </li>
                        <li className="nav-item">
                            <Link to="/logout" role="btn">
                                Logout
                            </Link>
                        </li>
                    </ul>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
