import React from "react";
import { useSelector } from "react-redux";
import { getContactsList } from "../../store/contacts";
import User from "./user";

const ContactsTable = () => {
    const contacts = useSelector(getContactsList());
    console.log(contacts);

    return (
        <div className="col-10 offset-1 col-md-8 offset-md-2 col-xl-6 offset-xl-3">
            <div class="table-responsive">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">name</th>
                            <th scope="col">company</th>
                            <th scope="col">phone</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {contacts.map((contact, index) => (
                            <tr key={index} className="align-middle">
                                <User
                                    id={contact._id}
                                    index={index + 1}
                                    name={contact.name}
                                    company={contact.company}
                                    phone={contact.phone}
                                />
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ContactsTable;
