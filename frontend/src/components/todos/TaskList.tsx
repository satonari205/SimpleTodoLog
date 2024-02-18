import { FC, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { Oval } from "react-loader-spinner";
import { todoState } from "../../Hooks/todoState";
import { getTasks } from "../../Hooks/todo";
import Task from "./Task";
import { Todo } from "../../types/ITodo";

const TaskList: FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [todos, setTodos] = useRecoilState(todoState);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTasks();
      setTodos(data);
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