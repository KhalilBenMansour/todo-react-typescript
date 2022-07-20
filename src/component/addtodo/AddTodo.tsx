import React, { useState } from "react";
import "./addTodo.scss";
interface Props {
  addTodo: (todo: string) => void;
}

const AddTodo = ({ addTodo }: Props) => {
  const [textTodo, setTextTodo] = useState<string>("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextTodo(e.target.value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!textTodo) {
      return;
    }
    addTodo(textTodo);
    setTextTodo("");
  };
  return (
    <form action="" className="addform" onSubmit={handleSubmit}>
      <input
        type="text"
        className="addform__input"
        placeholder="Add Todo..."
        onChange={handleChange}
        value={textTodo}
      />
      <button className="addform__button">Add</button>
    </form>
  );
};

export default AddTodo;
