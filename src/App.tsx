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
  const addTodo = (text: string) => {
    let index = todos.findIndex((e) => e.text === text);
    if (index !== -1) {
      return;
    }
    setTodos([...todos, { id: text + Date.now(), text, isDone: false }]);
  };
  return (
    <div className="App">
      <div className="container">
        <AddTodo addTodo={addTodo} />
        <TodoList todos={todos} />
      </div>
    </div>
  );
}

export default App;
