import { FC, useState } from "react";
import { Todo } from "../../types/ITodo";
import useTodoState from "../../Hooks/useTodoState";

interface Props {
  key: number;
  todo: Todo;
}

const Done: FC<Props> = (props) => {
  const { deleteTodo } = useTodoState();
  const [isLoading,setIsLoading] = useState<boolean>(false);

  const eliminate = async () => {
    setIsLoading(true);
    await deleteTodo(props.todo.id)
    setIsLoading(false);
  }

  const timeString = (props.todo.updated_at) ? props.todo.updated_at : '';
  const time = (timeString) ? timeString.split(' ')[1] : '?????';

  if (isLoading) return (
    <div className="w-10 mx-auto mt-10">
      <span className="loading loading-spinner text-primary"></span>
    </div>
  );

  return (
    <li className="flex justify-between gap-2 mb-1">
      <strong className="text-lg break-all max-w-96">{props.todo.title}</strong>
      <div className="flex justify-between items-center gap-2 min-w-16">
      <span>{time}</span>
      <button onClick={eliminate}><img src="/trash.png" /></button>
      </div>
    </li>
  );
}

export default Done;