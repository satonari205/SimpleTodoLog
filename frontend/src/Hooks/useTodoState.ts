import { useState } from "react";
import { RecoilEnv, atom, useRecoilState } from "recoil";
import api from "./api";
import { Todo } from "../types/ITodo"

RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;

const useTodoState = () => {
  const todoState = atom<Todo[]>({
    key: 'todoState',
    default: []
  });
  const [todos, setTodos] = useRecoilState(todoState);
  const [isError, setIsError] = useState<string>('');

  const getTodos = async (done: string, date: any = null) => {
    const URL = (date === null)
    ? `/api/todos?done=${done}`
    : `/api/todos?done=${done}&date=${date}`;
    await api.get(URL)
      .then(res => setTodos(res.data.data))
      .catch((e) => setIsError(e.response.data.message));
  }

  const storeTodo = async (todoTitle: string) => {
    const res = await api.post('/api/todos', { "title" : todoTitle, "done" : false });
    const newTodo = res.data.data;
    setTodos([...todos, newTodo]);
    return newTodo;
  }

  const updateTodo = async (id: number) => {
    await api.put(`/api/todos/${id}`);
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  const deleteTodo = async (id: number) => {
    await api.delete(`/api/todos/${id}`);
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return { todos, isError, getTodos, storeTodo, updateTodo, deleteTodo }
}

export default useTodoState;