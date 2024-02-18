import { FC, useState } from "react";
import { Todo } from "../../types/ITodo";
import { deleteTask, updateTask } from "../../Hooks/todo";
import { TailSpin } from "react-loader-spinner";

interface Props {
  key: number;
  todo: Todo;
}

const Task: FC<Props> = (props) => {
  const id = props.todo.id;
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const update = async () => {
    setIsLoading(true);
    await updateTask(id);
    setIsLoading(false);
  }
  
  const eliminate = async () => {
    setIsLoading(true);
    await deleteTask(id);
    setIsLoading(false);
  }

  return (
    <>
      <tr className="flex sm:flex-row hover:bg-gray-100 text-lg">
        <th className="break-all p-0 my-2 sm:p-3 sm:mt-0">{props.todo.title}</th>
        <td className="min-w-28 flex items-center ml-auto">
          {
            isLoading &&
            <TailSpin
              visible={true}
              height="30"
              width="30"
              color="#411DD8"
              ariaLabel="tail-spin-loading"
              radius="1"
              wrapperStyle={{}}
            />
          }
          <button
            className="btn btn-xs btn-primary btn-outline mr-2"
            onClick={update}
          >
            Done
          </button>
          <button onClick={eliminate}>
            <img src="/trash.png" />
          </button>
        </td>
      </tr>
    </>
  );
};

export default Task;