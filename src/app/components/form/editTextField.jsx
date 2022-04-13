import React from "react";
import PropTypes from "prop-types";

const editTextField = ({ type, name, value, onChange, error }) => {
    const handleChange = ({ target }) => {
        onChange({ name: target.name, value: target.value });
    };

    return (
        <>
            <input
                type="text"
                id={name}
                name={name}
                value={value}
                onChange={handleChange}
                className="w-100"
            />
            {error && <div className="invalid-feedback ">{error}</div>}
        </>
    );
};

editTextField.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    error: PropTypes.string,
};

export default editTextField;
