import { FC, useState } from "react";
import { TailSpin } from "react-loader-spinner";
import useTodoState from "../../Hooks/useTodoState";
import { Todo } from "../../types/ITodo";

interface Props {
  key: number;
  todo: Todo;
}

const Task: FC<Props> = (props) => {
  const id = props.todo.id;
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { updateTodo, deleteTodo } = useTodoState();

  const update = async () => {
    setIsLoading(true);
    await updateTodo(id);
    setIsLoading(false);
  }
  
  const eliminate = async () => {
    setIsLoading(true);
    await deleteTodo(id);
    setIsLoading(false);
  }

  return (
    <>
      <tr className="flex sm:flex-row hover:bg-gray-100 text-lg">
        <th className="break-all p-0 my-2 sm:p-3 sm:mt-0">{props.todo.title}</th>
        <td className="flex gap-3 items-center ml-auto">
          {
            isLoading &&
            <TailSpin
              visible={true}
              height="20"
              width="20"
              color="#411DD8"
              ariaLabel="tail-spin-loading"
              radius="1"
            />
          }
          <button
            className="btn btn-xs btn-primary btn-outline"
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