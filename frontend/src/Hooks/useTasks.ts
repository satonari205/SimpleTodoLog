import useSWR from 'swr';
import { Todo } from '../types/ITodo';
import api from './api';

const useTasks = () => {
  const getTasks = async () => {
    try {
      const res = await api.get('tasks');
      return res.data.filter((todo: Todo) => !todo.done);
    } catch(e) {
      console.log(e);
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