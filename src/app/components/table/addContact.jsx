import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../store/contacts";
import TextField from "../form/textField";

const AddContact = () => {
    const dispatch = useDispatch();
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

    const handleAddContact = () => {
        dispatch(addContact(newData));
    };

    return (
        <>
            <div className="row mt-4">
                <div className="col-10 offset-1 col-md-8 offset-md-2 col-xl-6 offset-xl-3">
                    <table className="table">
                        <tbody>
                            <tr>
                                <td>
                                    <TextField
                                        label="name"
                                        type="text"
                                        name="name"
                                        value={newData.name}
                                        onChange={handleChange}
                                        error={errors.name}
                                    />
                                </td>
                                <td>
                                    <TextField
                                        label="company"
                                        type="text"
                                        name="company"
                                        value={newData.company}
                                        onChange={handleChange}
                                        error={errors.company}
                                    />
                                </td>
                                <td>
                                    <TextField
                                        label="phone"
                                        type="text"
                                        name="phone"
                                        value={newData.phone}
                                        onChange={handleChange}
                                        error={errors.phone}
                                    />
                                </td>
                                <td className="align-middle">
                                    <i
                                        className="bi bi-plus-circle"
                                        title="add"
                                        role="button"
                                        onClick={handleAddContact}
                                    ></i>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default AddContact;
