import { FC } from 'react';
import useSWR from 'swr';
import { Todos } from '../types/ITodo';
import api from './api';

const useTasks: FC = (): Promise<Todos> => {
  const getTasks = async () => {
    try {
      const res = await api.get('tasks');
      return res.data.filter((todo) => !todo.done);
    } catch(e) {
      throw new Error(e);
    }
  }

  const { data, error, isLoading } = useSWR(`/tasks`, getTasks);

  return {
    todos: data,
    isLoading,
    isError: error
  };
}

export default useTasks;