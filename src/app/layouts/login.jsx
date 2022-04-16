import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TextField from "../components/form/textField";
import { getUserError, login } from "../store/user";

const Login = () => {
    const dispatch = useDispatch();

    const [loginData, setLoginData] = useState({
        login: "",
        password: "",
    });
    const loginError = useSelector(getUserError());
    const [errors, setErrors] = useState({});

    const handleChange = (target) => {
        setLoginData((prevState) => ({
            ...prevState,
            [target.name]: target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login(loginData));
    };

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-4 offset-md-4 shadow p-4 mt-5">
                    <form onSubmit={handleSubmit}>
                        <TextField
                            label="login"
                            name="login"
                            value={loginData.login}
                            onChange={handleChange}
                            error={errors.login}
                        />
                        <TextField
                            label="password"
                            type="password"
                            name="password"
                            value={loginData.password}
                            onChange={handleChange}
                            error={errors.password}
                        />

                        {loginError && (
                            <p className="text-danger">{loginError}</p>
                        )}

                        <button type="submit" className="btn btn-light w-100">
                            enter
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
