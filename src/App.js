import React, { useState, useEffect } from "react";
// import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Todos from "./components/Todos";
import Header from "./components/layouts/Header";
import AddTodo from "./components/AddTodo";
import About from "./components/pages/About";
import axios from "axios";

function App() {
    const [todos, setTodos] = useState([]);

    const toggleComplete = (id) => {
        setTodos(
            todos.map((todo) => {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            })
        );
    };

    const deleteTodo = (id) => {
        axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(response => {
            setTodos(
                todos.filter((todo) => {
                    return todo.id !== id;
                })
            );
        })
        .catch(error => console.log(error))
    };

    const addTodo = (title) => {
        axios
            .post("https://jsonplaceholder.typicode.com/todos", {
                title,
                completed: false,
            })
            .then((response) => setTodos([...todos, response.data]))
            .catch((error) => console.log(error));
    };

    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
            .then((response) => {
                setTodos(response.data);
            })
            .catch((error) => {
                console.error("error occured", error);
            });
    }, []);

    return (
        <Router>
            <div className="App">
                <div className="container">
                    <Header></Header>
                    <Route
                        exact
                        path="/"
                        render={(props) => (
                            <React.Fragment>
                                <AddTodo addTodo={addTodo}></AddTodo>
                                <Todos
                                    todos={todos}
                                    markComplete={toggleComplete}
                                    deleteTodo={deleteTodo}
                                />
                            </React.Fragment>
                        )}
                    ></Route>
                    <Route path="/about" component={About}></Route>
                </div>
            </div>
        </Router>
    );
}

export default App;
