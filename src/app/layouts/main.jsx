import React from "react";

import AddContact from "../components/table/addContact";
import ContactsTable from "../components/table/contactsTable";
import Navbar from "../ui/Navbar";

const Main = () => {
    return (
        <div className="container">
            <Navbar />
            <AddContact />
            <ContactsTable />
        </div>
    );
};

export default Main;
