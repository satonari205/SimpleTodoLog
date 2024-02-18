import api from "./api";
import { Todo } from "../types/ITodo";

export const getTasks = async () => {
  let todos: Todo[] = [];
  await api.get('/api/todos').then((res) => todos = res.data.data);
  sessionStorage.setItem("todos",JSON.stringify(todos));
  return todos;
}

export const addTask = async (todoTitle: string) => {
  const newTodo:Todo = await api.post('/api/todos', { "titie" : todoTitle, "done" : false });
  addTaskInStorage(newTodo);
}

export const updateTask = async (id: number) => {
  await api.put(`/api/todos/${id}`);
  deleteTaskInStorage(id);
}

export const deleteTask = async (id: number) => {
  await api.delete(`/api/todos/${id}`);
  deleteTaskInStorage(id);
}


//________________sessionStorage更新用関数__________________________//
const addTaskInStorage = (newTodo: Todo): void => {
  const todosString = sessionStorage.getItem('todos');
  const todos: Todo[] = (todosString !== null) ? JSON.parse(todosString) : [];
  const currentTodos = [...todos, newTodo];
  sessionStorage.setItem("todos", JSON.stringify(currentTodos));
}

const deleteTaskInStorage = (id: number): void => {
  const todosString = sessionStorage.getItem('todos');
  const todos: Todo[] = (todosString !== null) ? JSON.parse(todosString) : [];

  //sessionStorageに何も入っていなかった場合
  if(todos.length === 0) {
    return;
  }

  const currentTodos: Todo[] = todos.filter(todo => todo.id !== id);
  sessionStorage.setItem('todos', JSON.stringify(currentTodos));
}