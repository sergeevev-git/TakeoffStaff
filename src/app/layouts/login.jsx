import React, { useEffect, useState } from "react";
// import { validator } from "../../utils/ validator";
import TextField from "../components/form/textField";
// import CheckBoxField from "../common/form/checkBoxField";
// import { useHistory } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { getAuthErrors, login } from "../../store/users";

const Login = () => {
    const [loginData, setLoginData] = useState({
        login: "",
        password: "",
    });
    // const loginError = useSelector(getAuthErrors());
    // const history = useHistory();
    // const dispath = useDispatch();
    const [errors, setErrors] = useState({});

    const handleChange = (target) => {
        setLoginData((prevState) => ({
            ...prevState,
            [target.name]: target.value,
        }));
    };

    // const validatorConfig = {
    //     email: {
    //         isRequired: {
    //             message: "Электронная почта обязательна для заполнения"
    //         }
    //     },
    //     password: {
    //         isRequired: {
    //             message: "Пароль обязателкн для заполнения"
    //         }
    //     }
    // };
    // useEffect(() => {
    //     validate();
    // }, [data]);
    // const validate = () => {
    //     const errors = validator(data, validatorConfog);
    //     setErrors(errors);
    //     return Object.keys(errors).length === 0;
    // };
    // const isValid = Object.keys(errors).length === 0;

    const handleSubmit = (e) => {
        e.preventDefault();

        // const isValid = validate();
        // if (!isValid) return;
        // const redirect = history.location.state
        //     ? history.location.state.from.pathname
        //     : "/";
        // dispath(login({ payload: data, redirect }));
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

                        {/* {loginError && <p className="text-danger">{loginError}</p>} */}

                        <button
                            type="submit"
                            // disabled={!isValid}
                            className="btn btn-light w-100"
                        >
                            enter
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
