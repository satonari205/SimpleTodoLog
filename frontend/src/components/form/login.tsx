import { FC } from "react";
import api from "../../Hooks/api";

const LoginForm: FC = () => {
  const login = async (): Promise<void> => {
    const res = api.get('/sanctum/csrf-cookie');
    try {
      await api.post('login',
        // {email,password}
      )
        .then((res) => {
          console.log
        })
        .catch((e) => {

        });
    } catch (e) {

    }
  }

  return (
    <div className="p-3 mx-auto max-w-lg text-right">
      <h1 className="pb-3 text-center text-lg">Login</h1>
      <input
        name="email"
        type="text"
        placeholder="email"
        className="input input-bordered w-full max-w-lg h-10 mb-3"
      />
      <input
        name="password"
        type="password"
        placeholder="password"
        className="input input-bordered w-full max-w-lg h-10 mb-3"
      />
      <button
        onClick={login}
        className="btn btn-sm btn-primary ml-auto"
      >
        Login
      </button>
    </div>
  );
}

export default LoginForm;