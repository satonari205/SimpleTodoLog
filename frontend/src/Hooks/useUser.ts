import api from "./api";
import useSWR from "swr";

const useUser = () => {
  const me = async () => {
    const res = await api.get('/api/me');
    return res.data.data;
  }

  const { data, error, isLoading} = useSWR('/api/me', me, {
    onErrorRetry: (error) => {
      if (error.status === 404) return;
  }});

  return {
    user: data,
    isLoading,
    isError: error,
  }

}

export default useUser;