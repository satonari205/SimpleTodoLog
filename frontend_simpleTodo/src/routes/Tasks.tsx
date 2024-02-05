import { FC } from "react";
import { Oval } from "react-loader-spinner";
import Todo from "../components/todo/Todo";
import useTasks from "../Hooks/useTasks";
import { Todos } from "../types/ITodo";

export const Tasks: FC = () => {
  const { todos, isLoading, isError } = useTasks<Promise[Todos]>();

  if (isLoading) {
    return (
      <div className="mx-auto w-8 h-8">
        <Oval
          visible={true}
          height="32"
          width="32"
          color="#411DD8"
          ariaLabel="oval-loading"
        />
      </div>
    );
  }

  if (isError) return <h1>error</h1>;

  return (
    <>
      <div className="flex gap-3 mx-auto min-w-xs mb-4">
        <input
          type="text"
          name="title"
          placeholder="What should I do?"
          className="input input-bordered h-8 w-4/5"
        />
        <button className="btn btn-sm btn-primary">add</button>
      </div>
      <div className="overflow-y-scroll" style={{ height: "70vh" }}>
        <table className="table">
          <tbody>
            {
              todos
              ? todos.map((todo) => <Todo key={todo.id} title={todo.title} />)
              : null
            }
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Tasks;
