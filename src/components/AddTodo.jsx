import React, { useState } from "react";
import PropTypes from 'prop-types'

function AddTodo(props) {
    const [title, setTitle] = useState("");

    const handleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        props.addTodo(title);
    }

    return (
        <form onSubmit={handleSubmit} style={{ display: "flex" }}>
            <input
                type="text"
                name="title"
                placeholder="Add Todo..."
                style={{ flex: "10", padding: "5px" }}
                value={title}
                onChange={handleChange}
            />
            <input
                type="submit"
                value="Submit"
                className="btn"
                style={{ flex: 1 }}
            />
        </form>
    );
}

AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired
}

export default AddTodo;
