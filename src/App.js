import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./app/layouts/login";
import Main from "./app/layouts/main";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/contacts" element={<Main />} />
                <Route path="*" element={<Login />} />
            </Routes>
        </div>
    );
}

export default App;
