import { FC } from "react";
import InputTask from "../components/todos/InputTask";
import TaskList from "../components/todos/TaskList";

export const Tasks: FC = () => {
  return (
    <>
        <InputTask />
        <TaskList />
    </>
  );
};

export default Tasks;
