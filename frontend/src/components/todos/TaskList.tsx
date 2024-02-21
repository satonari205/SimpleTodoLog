import { FC, useEffect, useState } from "react";
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

  if (isLoading) return (
    <div className="w-10 mx-auto mt-10">
      <span className="loading loading-spinner text-primary"></span>
    </div>
  );

  if (isError !== '') return <h1>{isError}</h1>;

  return (
    <table className="table">
      <tbody>
        {
          todos.length !== 0
            ? todos.map((todo: Todo) => <Task key={todo.id} todo={todo} />)
            : <h1 className="text-center text-xl py-4">やるべきことを追加しましょう。</h1>
        }
      </tbody>
    </table>
  );
}

export default TaskList;