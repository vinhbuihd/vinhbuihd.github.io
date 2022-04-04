import React from "react";
import { useState } from "react";
import AddTodo from "./AddTodo.jsx";
import TodoList from "./TodoList";
import "./App.css";

const App = () => {
  const [list, setList] = useState([]);
  const [inputText, setInputText] = useState(() => {
    return JSON.parse(localStorage.getItem("inputText"));
  });
  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputText.trim() != "") {
      let newList = [...list];
      let newJob = {
        name: inputText,
        id: new Date().getTime(),
      };
      newList = [newJob, ...newList];
      localStorage.setItem("inputText", JSON.stringify(newList));
      setList(newList);
      setInputText("");
    }
  };

  const handleChange = (e) => {
    setInputText(e.target.value);
  };
  const clearTodoList = () => setList([]);

  const handleDelete = (e) => {
    const element = e.target.closest(".todo-text");
    const id = element.getAttribute("dataset");
    let newList = [...list];
    newList = newList.filter((job) => job.id != id);
    localStorage.setItem("inputText", JSON.stringify(newList));
    setList(newList);
  };
  return (
    <div className="container">
      <h1>Simple Todo App</h1>
      <AddTodo
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        inputText={inputText}
      />
      <TodoList list={list} handleDelete={handleDelete} />
      <div className="bottom">
        <span>
          Your have <b>{list.length}</b> pending task
        </span>
        <button className="btn red" onClick={clearTodoList}>
          Clear All
        </button>
      </div>
    </div>
  );
};

export default App;
