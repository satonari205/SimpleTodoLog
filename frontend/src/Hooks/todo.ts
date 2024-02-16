import api from "./api";
import { Todo } from "../types/ITodo";

export const getTasks = async ():Promise<Todo[]> => {
  let todos:Todo[] = []; 
  await api.get('/api/todos').then((res) => {
    todos = res.data.data;
    sessionStorage.setItem("todos",JSON.stringify(todos));
  });
  return todos;
}

export const addTask = async (todoTitle:string) => {
  await api.post('/api/todos', { "titie" : todoTitle, "done" : false });

}

export const updateTask = async (id:number) => {
  await api.put(`/api/todos/${id}`);
}

export const deleteTask = async (id:number) => {
  await api.delete(`/api/todos/${id}`);
}