import { FC, useState } from "react";
import { TailSpin } from "react-loader-spinner";
import useTodoState from "../../Hooks/useTodoState";

const InputTask: FC = () => {
  const [todoTitle, setTodoTitle] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { storeTodo } = useTodoState();

  const addTask = async () => {
    setIsLoading(true);
    setTodoTitle('');
    await storeTodo(todoTitle);
    setIsLoading(false);
  };

  return (
    <div className="flex gap-4 max-w-xl w-4/5 min-w-sm h-10 mb-4">
      <input
        type="text"
        name="title"
        placeholder="What should I do?"
        className="input input-bordered h-8 w-4/5"
        value={todoTitle}
        onChange={(e) => setTodoTitle(e.target.value)}
      />
      <button className="btn btn-sm btn-primary" onClick={addTask}>add</button>
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
    </div>
  );
}

export default InputTask;