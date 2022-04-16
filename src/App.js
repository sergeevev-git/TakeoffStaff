import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Logout from "./app/components/logout";
import PrivateRoute from "./app/components/privateRoute";
import AppLoader from "./app/hoc/appLoader";
import Login from "./app/layouts/login";
import Main from "./app/layouts/main";

function App() {
    return (
        <div>
            <AppLoader>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route
                        path="/contacts"
                        element={
                            <PrivateRoute>
                                <Main />
                            </PrivateRoute>
                        }
                    ></Route>
                    <Route
                        path="/logout"
                        element={
                            <PrivateRoute>
                                <Logout />
                            </PrivateRoute>
                        }
                    ></Route>

                    <Route path="*" element={<Navigate to="/contacts" />} />
                    {/* <Route path="/logout" element={<Logout />} /> */}
                    {/* <Route path="/contacts" element={<Main />} /> */}
                </Routes>
            </AppLoader>
            <ToastContainer />
        </div>
    );
}

export default App;
