import React from "react";
import Contacts from "../components/contacts";
import Navbar from "../ui/Navbar";

const Main = () => {
    return (
        <div className="container">
            <Navbar />
            <Contacts />
        </div>
    );
};

export default Main;
