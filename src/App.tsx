import { useState } from "react";
import "./App.scss";
import AddTodo from "./component/addtodo/AddTodo";
import TodoList from "./component/todoList/TodoList";

export interface TodoType {
  id: string;
  text: string;
  isDone: boolean;
}

function App() {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [filterType, setFilterType] = useState<"all" | "active">("all");

  const addTodo = (text: string) => {
    let index = todos.findIndex((e) => e.text === text);
    if (index !== -1) {
      return;
    }
    setTodos([...todos, { id: Date.now().toString(), text, isDone: false }]);
  };
  const changeStatus = (todo: TodoType) => {
    console.log("changeStatus");
    const todoobj = todos.filter((e) => e.id === todo.id)[0];
    const newTodo = { ...todoobj, isDone: !todoobj.isDone };
    const newTodos = [...todos].map((e) => {
      if (newTodo.id === e.id) {
        return newTodo;
      } else {
        return e;
      }
    });
    setTodos(newTodos);
  };
  const deleteTodo = (id: string) => {
    const newTodos = todos.filter((e) => e.id !== id);
    setTodos(newTodos);
  };
  const editTodos = (editTodo: TodoType) => {
    const newTodos = [...todos].map((e) => {
      if (e.id === editTodo.id) {
        return editTodo;
      } else {
        return e;
      }
    });
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <div className="container">
        <div className="heading">
          <span className="heading__title">todo list</span>
          <button className="heading__button">toggle all</button>
        </div>
        <div className="body">
          <TodoList
            todos={todos}
            changeStatus={changeStatus}
            deleteTodo={deleteTodo}
            editTodos={editTodos}
            type={filterType}
          />

          <AddTodo addTodo={addTodo} />
        </div>
        <div className="footer">
          <div className="left">
            <button
              className={
                filterType === "all" ? "left__button active" : "left__button"
              }
              onClick={() => setFilterType("all")}
            >
              all
            </button>
            <button
              className={
                filterType === "active" ? "left__button active" : "left__button"
              }
              onClick={() => setFilterType("active")}
            >
              active
            </button>
          </div>
          <div className="right">
            <span className="right__span">3 left</span>
            <button className="right__button">clear completed(2)</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
