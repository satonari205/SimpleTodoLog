import api from "./api";
import { User } from "../types/IUser";
import useSWR from "swr";

const useUser = () => {
  const getUser = async ():Promise<User|undefined> => {
    try {
      const res = await api.get('/api/me');
      return res.data.data;
    } catch (e) {
      console.log(e);
    }
  }

  const { data, error, isLoading} = useSWR('/api/me', getUser);

  return {
    user: data,
    isLoading,
    isError: error
  }

}

export default useUser;