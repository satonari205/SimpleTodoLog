import { FC, useEffect, useState } from "react";
import { Oval } from "react-loader-spinner";
import { getTasks } from "../Hooks/todo";
import InputTask from "../components/todos/InputTask";
import TaskList from "../components/todos/TaskList";
import { Todo } from "../types/ITodo";

export const Tasks: FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [firstTodos, setFirstTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setFirstTodos(await getTasks());
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

  return (
    <>
      <InputTask />
      <TaskList firstTodos={firstTodos} />
    </>
  );
};

export default Tasks;
