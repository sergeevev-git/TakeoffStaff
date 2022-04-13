import React, { useEffect, useState } from "react";
import ContactsTable from "./table/contactsTable";
import TextField from "./form/textField";
import AddContact from "./table/addContact";

const Contacts = () => {
    const [newData, setNewData] = useState({
        name: "",
        company: "",
        phone: "",
    });

    const [errors, setErrors] = useState({});

    const handleChange = (target) => {
        setNewData((prevState) => ({
            ...prevState,
            [target.name]: target.value,
        }));
    };

    return (
        <>
            <AddContact />
            <ContactsTable />
        </>
    );
};

export default Contacts;
