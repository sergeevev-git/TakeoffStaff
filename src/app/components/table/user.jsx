import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { removeContact } from "../../store/contacts";
import EditTextField from "../form/editTextField";

const User = ({ id, index, name, company, phone }) => {
    const dispath = useDispatch();
    const [editMode, setEditMode] = useState(false);
    const [data, setData] = useState({
        name: name,
        company: company,
        phone: phone,
    });
    const [errors, setErrors] = useState({});

    const toggleEditMode = () => {
        setEditMode((prevState) => !prevState);
    };

    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value,
        }));
    };

    const handleRemove = () => {
        dispath(removeContact(id));
    };
    return (
        <>
            <th scope="row">{index}</th>
            {!editMode ? (
                <>
                    <td>{name}</td>
                    <td>{company}</td>
                    <td>{phone}</td>
                </>
            ) : (
                <>
                    <td className="mx-auto">
                        <EditTextField
                            type="text"
                            name="name"
                            value={name}
                            onChange={handleChange}
                            error={errors.name}
                        />
                    </td>
                    <td className="mx-auto">
                        <EditTextField
                            type="text"
                            name="company"
                            value={company}
                            onChange={handleChange}
                            error={errors.company}
                        />
                    </td>
                    <td className="mx-auto">
                        <EditTextField
                            type="text"
                            name="phone"
                            value={phone}
                            onChange={handleChange}
                            error={errors.phone}
                        />
                    </td>
                </>
            )}
            <td>
                <div className="d-flex flex-nowrap">
                    <i
                        className="bi bi-dash-circle"
                        title="delete"
                        role="button"
                        onClick={handleRemove}
                    ></i>
                    <i
                        className="bi bi-pencil mx-2"
                        title="edit"
                        role="button"
                        onClick={toggleEditMode}
                    ></i>
                </div>
            </td>
        </>
    );
};

export default User;
