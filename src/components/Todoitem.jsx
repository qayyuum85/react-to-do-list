import React from "react";
import PropTypes from "prop-types";

function Todoitem(props) {
    const getStyle = () => {
        return {
            background: "#f4f4f4",
            borderBottom: "1px dotted #ccc",
            padding: "10px",
            textDecoration: props.todo.completed ? "line-through" : "none",
        };
    };

    const {id, title} = props.todo;    
    const handleChange = () => {
        props.markComplete(id);
    };

    const deleteTodo = () => {
        props.deleteTodo(id);
    }

    return (
        <div style={getStyle()}>
            <p>
                <input type="checkbox" onChange={handleChange} /> { " " }
                {title}
                <button onClick={deleteTodo} style={btnStyle}>x</button>
            </p>
        </div>
    );
}

Todoitem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
};

const btnStyle = {
    background: "#ff0000",
    color: "#fff",
    borderRadius: "50%",
    padding: "5px 9px",
    cursor: "pointer",
    float: "right",
    border: "none"
}

export default Todoitem;
