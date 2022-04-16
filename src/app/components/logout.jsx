import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { logout } from "../store/user";

const Logout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        dispatch(logout());
        navigate("/");
    }, [dispatch]);

    return <h1>Bye</h1>;
};

export default Logout;
