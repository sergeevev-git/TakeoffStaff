import React from "react";
// import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import useMockData from "../utils/mockData";

// import { getIsLoggedIn } from "../../store/users";

const Navbar = () => {
    // const isLoggedIn = useSelector(getIsLoggedIn());

    // const { error, initialize, progress, status } = useMockData();
    // const handleClick = () => {
    //     initialize();
    // };
    return (
        <nav className="navbar bg-light mb-3">
            <div className="container-fluid">
                <ul className="nav">
                    <li className="nav-item"></li>
                    {/* {isLoggedIn && ( */}
                    <li className="nav-item">
                        <button
                            className="btn btn-primary"
                            // onClick={handleClick}
                        >
                            загрузить данные
                        </button>
                        {/* <ul>
                            <li>Status:{status}</li>
                            <li>Progress: {progress}%</li>
                            {error && <li>error: {error}</li>}
                        </ul> */}
                    </li>
                    {/* )} */}
                </ul>
                {/* <div className="d-flex">
                    {isLoggedIn ? (
                        <NavProfile />
                    ) : (
                        <Link
                            className="nav-link "
                            aria-current="page"
                            to="/login"
                        >
                            Login
                        </Link>
                    )}
                </div> */}
            </div>
        </nav>
    );
};

export default Navbar;
