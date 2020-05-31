import React from "react";
import TodoItem from "./Todoitem";
import PropTypes from "prop-types";

function Todos(props) {
    return props.todos.map((todo) => {
        return (
            <TodoItem
                key={todo.id}
                todo={todo}
                markComplete={props.markComplete}
                deleteTodo={props.deleteTodo}
            ></TodoItem>
        );
    });
}

Todos.propTypes = {
    todos: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
};

export default Todos;
