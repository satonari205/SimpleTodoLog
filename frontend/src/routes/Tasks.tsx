import { FC, useState } from "react";
import { Oval } from "react-loader-spinner";
import Task from "../components/todos/Task";
import InputTask from "../components/todos/InputTask";
import { Todo } from "../types/ITodo";

export const Tasks: FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  if (isLoading) {
    return (
      <div className="mx-auto w-8 h-8">
        <Oval visible={true} height="32" width="32" color="#411DD8" ariaLabel="oval-loading"/>
      </div>
    );
  }

  return (
    <>
      <InputTask />
      <table className="table">
        <tbody>
          {
            todos
            ? todos.map((todo:Todo) => <Task key={todo.id} todo={todo} />)
            : <h1>やるべきことを追加しましょう。</h1>
          }
        </tbody>
      </table>
    </>
  );
};

export default Tasks;
