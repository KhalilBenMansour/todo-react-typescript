import React from "react";
import type { TodoType } from "../../App";

interface Props {
  todo: TodoType;
}
const Todo = ({ todo }: Props) => {
  return <li>{todo.text}</li>;
};

export default Todo;
