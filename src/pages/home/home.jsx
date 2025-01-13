import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Input from "../../components/input/input";
import Navbar from "../../components/navbar/navbar";
import "./home.css";
const Home = () => {
  // {
  //    email:{
  //     name:name,
  //     password:password,
  //    }
  //    email-todos:[]
  // }

  const { state } = useLocation();
  // const data = JSON.parse(localStorage.getItem(state[0]));
  const todos = JSON.parse(localStorage.getItem(`${state[0]}-todo`));
  // console.log(data);
  // console.log(todos);

  const [allTodos, setAllTodos] = useState(todos.todos);
  const [todo, setTodo] = useState("");
  const [toggleAddEdit, setToggleAddEdit] = useState({
    buttonState: false,
    editIndex: null,
  });

  function handleTodo(e) {
    setTodo(e.target.value);
  }

  function addOrEdittodo() {
    if (todo.length <= 0) {
      return alert("enter valid todo");
    }
    if (!toggleAddEdit.buttonState) {
      setAllTodos([...allTodos, todo]);
      localStorage.setItem(
        `${state[0]}-todo`,
        JSON.stringify({ todos: [...allTodos, todo] })
      );
      setTodo("");
    } else {
      todos.todos[toggleAddEdit.editIndex] = todo;
      setAllTodos(todos.todos);
      localStorage.setItem(
        `${state[0]}-todo`,
        JSON.stringify({ todos: todos.todos })
      );
      setTodo("");
      setToggleAddEdit({
        buttonState: false,
        editIndex: null,
      });
    }
  }

  function handleDelete(index) {
    todos.todos.splice(index, 1);
    console.log(todos.todos);
    localStorage.setItem(
      `${state[0]}-todo`,
      JSON.stringify({ todos: todos.todos })
    );
    setAllTodos(todos.todos);
  }

  function handleEdit(index) {
    setTodo(todos.todos[index]);
    setToggleAddEdit({
      buttonState: true,
      editIndex: index,
    });
  }

  return (
    <div className="home-container">
      <Navbar name={state[2]} email={state[0]} password={state[1]} />
      <div>
        <Input
          placeHolder={"Please Enter your task"}
          handleInput={handleTodo}
          type="text"
          value={todo}
          required={true}
        />
        <button className="todo-component-button" onClick={addOrEdittodo}>
          {toggleAddEdit.buttonState ? "Edit Todo" : "Add Todo"}
        </button>
      </div>
      <div className="todos-rapper">
        {allTodos.map((todo, index) => (
          <div key={index}>
            <div className="single-todo">
              <span>{index + 1}</span> {todo}
            </div>
            <button
              className="todo-component-button"
              onClick={() => handleDelete(index)}
            >
              Delete
            </button>
            <button
              className="todo-component-button"
              onClick={() => handleEdit(index)}
            >
              Edit
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
