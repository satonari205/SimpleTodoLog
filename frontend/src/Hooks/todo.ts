import api from "./api";
import { useRecoilState } from "recoil";
import { todoState } from "./todoState";

const [todos, setTodos] = useRecoilState(todoState);

export const getTasks = async () => {
  const res = await api.get('/api/todos');
  return res ? res.data.data : [];
}

export const storeTask = async (todoTitle: string) => {
  const res = await api.post('/api/todos', { "title" : todoTitle, "done" : false });
  const newTodo = res.data.data;
  setTodos([...todos, newTodo]);
  return newTodo;
}

export const updateTask = async (id: number) => {
  await api.put(`/api/todos/${id}`);
  setTodos(todos.filter((todo) => todo.id !== id));
}

export const deleteTask = async (id: number) => {
  await api.delete(`/api/todos/${id}`);
  setTodos(todos.filter((todo) => todo.id !== id));
}