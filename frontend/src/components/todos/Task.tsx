import { FC } from "react";
import { Todo } from "../../types/ITodo";
import { deleteTask } from "../../Hooks/todo";

interface Props {
  key: number;
  todo: Todo;
}

const Task: FC<Props> = (props) => {
  const dummy = () => { alert('not yet'); };

  return (
    <>
      <tr className="flex sm:flex-row hover:bg-gray-100 text-lg">
        <th className="break-all p-0 my-2 sm:p-3 sm:mt-0">{props.todo.title}</th>
        <td className="min-w-28 flex items-center ml-auto">
          <button className="btn btn-xs btn-primary btn-outline mr-2" onClick={dummy}>
            Done
          </button>
          <button onClick={() => deleteTask(props.key)}>
            <img src="/trash.png" />
          </button>
        </td>
      </tr>
    </>
  );
};

export default Task;