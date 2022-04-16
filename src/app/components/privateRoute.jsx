import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Login from "../layouts/login";
import Main from "../layouts/main";
import { getIsLoggedIn } from "../store/user";

const PrivateRoute = ({ component: Component, children, ...rest }) => {
    const isLoggedIn = useSelector(getIsLoggedIn());

    if (!isLoggedIn) {
        return <Navigate to="/login" />;
    }

    return children;
};

export default PrivateRoute;
