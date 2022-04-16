import React from "react";
import { useSelector } from "react-redux";
import { getContactsList, getDataStatus } from "../../store/contacts";
import User from "./user";

const ContactsTable = () => {
    const contacts = useSelector(getContactsList());
    const dataLoaded = useSelector(getDataStatus());

    return (
        <div className="col-10 offset-1 col-md-8 offset-md-2 col-xl-6 offset-xl-3">
            <div className="table-responsive">
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
                        {!dataLoaded ? (
                            <tr>
                                <td colSpan="5" className="text-center">
                                    loading...
                                </td>
                            </tr>
                        ) : (
                            contacts.map((contact, index) => (
                                <tr key={index} className="align-middle">
                                    <User
                                        id={contact.id}
                                        index={index + 1}
                                        name={contact.name}
                                        company={contact.company}
                                        phone={contact.phone}
                                    />
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ContactsTable;
