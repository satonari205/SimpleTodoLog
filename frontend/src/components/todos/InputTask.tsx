import { FC, useState } from "react";
import { addTask } from "../../Hooks/todo";

const InputTask: FC = () => {
  const [todoTitle, setTodoTitle] = useState<string>('');

  return (
    <>
      <div className="flex gap-3 mx-auto min-w-xs mb-4">
        <input
          type="text"
          name="title"
          placeholder="What should I do?"
          className="input input-bordered h-8 w-4/5"
          onChange={(e) => setTodoTitle(e.target.value)}
        />
        <button className="btn btn-sm btn-primary" onClick={() => addTask(todoTitle)}>
          add
        </button>
      </div>
    </>
  );
}

export default InputTask;