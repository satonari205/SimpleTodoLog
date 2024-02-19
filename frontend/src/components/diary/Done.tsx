import { FC } from "react";
import { Todo } from "../../types/ITodo";

interface Props {
  key: number;
  todo: Todo;
}

const Done: FC<Props> = (props) => {
  const timeString = (props.todo.updated_at) ? props.todo.updated_at : '';
  const time = (timeString) ? timeString.split(' ')[1] : '?????';
  

  return (
    <li className="flex justify-between gap-2 mb-1">
      <strong className="text-lg break-all max-w-96">{props.todo.title}</strong>
      <div className="flex justify-between items-center gap-2 min-w-16">
      <span>{time}</span>
      <button><img src="/trash.png" /></button>
      </div>
    </li>
  );
}

export default Done;