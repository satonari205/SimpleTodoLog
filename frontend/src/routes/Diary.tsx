import { FC, useEffect, useState } from "react";
import api from "../Hooks/api";
import { Todo } from "../types/ITodo";
import Done from "../components/diary/Done";

export const Diary: FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [todos, setTodos] = useState<Todo[]>([]);

  const update = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = e.target.value;
    console.log(time);
  }

  useEffect(() => {
    const fetchDones = async () => {
      const res = await api.get("/api/todos?done=true");
      setTodos(res.data.data);
      setIsLoading(false);
    }
    fetchDones();
  }, []);

  if (isLoading) return (
    <div className="w-10 mx-auto mt-10">
      <span className="loading loading-spinner text-primary"></span>
    </div>
  )

  return (
    <>
      <div className="flex justify-between gap-2 w-full">
        <span className="font-bold">日記</span>
        <div className="flex justify-between gap-2">
          <input type="date" onChange={(e) => update(e)} />
          <button></button>
        </div>
      </div>
      <ul className="p-4">
        {
          todos
            ? todos.map(todo => <Done key={todo.id} todo={todo} />)
            : <li className="text-center">何かを成しましょう</li>
        }
      </ul>
      <textarea className="textarea textarea-bordered w-full h-3/6" />
      <div className="flex justify-between py-2">
        <span></span>
        <button className="btn btn-sm btn-primary ">submit</button>
      </div>
    </>
  );
}