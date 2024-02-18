import { atom } from "recoil";
import { Todo } from "../types/ITodo";

export const todoState = atom<Todo[]>({
  key: 'todoState',
  default: []
});