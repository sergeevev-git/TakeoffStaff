import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getIsLoggedIn } from "../store/user";
import { loadContacts } from "../store/contacts";
import { useNavigate } from "react-router-dom";

const AppLoader = ({ children }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(getIsLoggedIn());

    useEffect(() => {
        if (isLoggedIn) {
            dispatch(loadContacts());
            navigate("/contacts");
        }
    }, [isLoggedIn]);

    return children;
};

export default AppLoader;
