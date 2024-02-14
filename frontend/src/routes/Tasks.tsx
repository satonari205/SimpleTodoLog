import { FC, useState } from "react";
// import { Oval } from "react-loader-spinner";
import Task from "../components/todos/Task";
// import useTasks from "../Hooks/useTasks";
import { Todo } from "../types/ITodo";

export const Tasks: FC = () => {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, title: "sampleTodo1", done: false },
    { id: 2, title: "sampleTodo2", done: false },
    { id: 3, title: "sampleTodo3", done: false },
    { id: 4, title: "sampleTodo4", done: false },
    { id: 5, title: "sampleTodo5", done: false },
    { id: 6, title: "sampleTodo6", done: false },
    { id: 7, title: "sampleTodo7", done: false }
  ]);

  // const { todos, isLoading, isError } = useTasks();

  // if (isLoading) {
  //   return (
  //     <div className="mx-auto w-8 h-8">
  //       <Oval
  //         visible={true}
  //         height="32"
  //         width="32"
  //         color="#411DD8"
  //         ariaLabel="oval-loading"
  //       />
  //     </div>
  //   );
  // }

  // if (isError) return <h1>error</h1>;

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
      <table className="table">
        <tbody>
          { todos ? todos.map((todo) => <Task key={todo.id} todo={todo} />) : null }
        </tbody>
      </table>
    </>
  );
};

export default Tasks;
