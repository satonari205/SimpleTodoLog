import { FC, useState } from "react";
import { Todo } from "../../types/ITodo";
import Task from "./Task";

interface Props {
  firstTodos: Todo[];
}

const TaskList: FC<Props> = (props) => {
  const [todos, setTodos] = useState<Todo[]>(props.firstTodos);
  
  return (
    <>
      <table className="table">
        <tbody>
          {
            todos
              ? todos.map((todo: Todo) => <Task key={todo.id} todo={todo} />)
              : <h1 className="text-center text-xl py-4">やるべきことを追加しましょう。</h1>
          }
        </tbody>
      </table>
    </>
  );
}

export default TaskList;