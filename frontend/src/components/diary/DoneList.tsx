import { FC, useEffect, useState } from "react";
import useTodoState from "../../Hooks/useTodoState";
import Done from "./Done";
import useDiary from "../../Hooks/useDiary";

const DoneList: FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { date } = useDiary();
  const { todos, getTodos } = useTodoState();

  const getDones = async () => {
    setIsLoading(true);
    await getTodos('true', date); //($done,$date);
    setIsLoading(false);
  }

  useEffect(() => {
    getDones();
  }, []);

  if (isLoading) return (
    <div className="w-10 mx-auto my-4">
      <span className="loading loading-spinner text-primary"></span>
    </div>
  );

  return (
    <>
      <ul className="p-4">
        {
          todos.length !== 0
            ? todos.map(todo => <Done key={todo.id} todo={todo} />)
            : <li className="text-center">Do something‼</li>
        }
      </ul>
    </>
  );
}

export default DoneList;