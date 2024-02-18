import { FC } from "react";
import { RecoilRoot } from "recoil";
import InputTask from "../components/todos/InputTask";
import TaskList from "../components/todos/TaskList";

export const Tasks: FC = () => {
  return (
    <>
      <RecoilRoot>
        <InputTask />
        <TaskList />
      </RecoilRoot>
    </>
  );
};

export default Tasks;
