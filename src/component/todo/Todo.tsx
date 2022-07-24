import React from "react";
import type { TodoType } from "../../App";

interface Props {
  todo: TodoType;
}
const Todo = ({ todo }: Props) => {
  return (
    <li className="list__item">
      <label className="list__item__label">
        <input
          className="list__item__input"
          type="checkbox"
          name={`${todo.id}`}
        />
        {todo.text}
      </label>
    </li>
  );
};

export default Todo;
