import useSWR from 'swr';
import { getTasks } from './todo';

const useTasks = () => {
  const { data, error, isLoading } = useSWR("/api/todos", getTasks);

  return {
    todos: data,
    isLoading,
    isError: error
  };
}

export default useTasks;