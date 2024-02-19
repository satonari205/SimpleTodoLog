import api from "./api";
import useSWR from "swr";

const useUser = () => {
  const getUser = async () => {
    const res = await api.get('/api/me');
    return res.data.data;
  }

  const { data, error, isLoading} = useSWR('/api/me', getUser, {
    onErrorRetry: (error) => {
      if (error.status === 404) return;
  }});

  return {
    user: data,
    isLoading,
    isError: error
  }

}

export default useUser;