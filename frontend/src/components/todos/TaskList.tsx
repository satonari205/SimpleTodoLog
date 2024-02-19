import { FC, useEffect, useState } from "react";
import { Oval } from "react-loader-spinner";
import Task from "./Task";
import { Todo } from "../../types/ITodo";
import useTodoState from "../../Hooks/useTodoState";

const TaskList: FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { todos, isError, getTodos } = useTodoState();

  useEffect(() => {
    const fetchData = async () => {
      await getTodos('false');
      setIsLoading(false);
    }
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className="mx-auto w-8 h-8">
        <Oval visible={true} height="32" width="32" color="#411DD8" ariaLabel="oval-loading" />
      </div>
    );
  }

  if (isError !== '') return <h1>{isError}</h1>

  return (
    <table className="table">
      <tbody>
        {
          todos
            ? todos.map((todo: Todo) => <Task key={todo.id} todo={todo} />)
            : <h1 className="text-center text-xl py-4">やるべきことを追加しましょう。</h1>
        }
      </tbody>
    </table>
  );
}

export default TaskList;