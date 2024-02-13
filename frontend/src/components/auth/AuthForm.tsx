import { FC, useState } from "react";
import { useForm } from 'react-hook-form';
import { FormState } from "../../types/IUser";
import { login, signup } from "../../Hooks/auth";

const AuthForm: FC = () => {
  const [isSignedUp, setIsSignedUp] = useState<boolean>(true);
  const currentForm = (isSignedUp) ? "Login" : "Singup";

  const { register, handleSubmit, formState: { errors } } = useForm<FormState>();
  const onSubmit = (data: FormState) => {
    if (data.name) {
      signup(data);
      setIsSignedUp(true);
      return;
    }
    login(data);
  }

  return (
    <form className="p-3 mx-auto max-w-lg text-right" onSubmit={handleSubmit(onSubmit)}>
      <h1 className="pb-3 text-center text-lg">{currentForm}</h1>
      {
        (!isSignedUp) &&
        <>
          <input
            {...register('name', { required: "nameを入力してください" })}
            placeholder="your name"
            className="input input-bordered w-full max-w-lg h-10"
          />
          <p className="text-rose-500 text-sm mb-3">{errors.name?.message}</p>
        </>
      }
      <input
        {...register('email', {
          required: "emailを入力してください",
          pattern: {
            value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            message: '有効なメールアドレスを入力してください。',
          },
        })}
        placeholder="email"
        className="input input-bordered w-full max-w-lg h-10"
      />
      <p className="text-rose-500 text-sm mb-3">{errors.email?.message}</p>
      <input
        {...register('password', {
          required: "passwordを入力してください",
          minLength: { value: 8, message: "8文字以上入力してください" }
        })}
        type="password"
        placeholder="password"
        className="input input-bordered w-full max-w-lg h-10"
      />
      <p className="text-rose-500 text-sm mb-3">{errors.password?.message}</p>
      <span className="flex justify-between items-center mt-4">
        {
          (isSignedUp)
            // ログイン用フォームに切り替え
            ? <span className="text-sm">
              未登録の場合は
              <span
                onClick={() => setIsSignedUp(false)}
                className="link link-primary ml-1 hover:cursor-pointer"
              >
                Signup
              </span>
            </span>
            // 登録用フォームに切り替え
            : <span className="text-sm">
              登録済みの場合は
              <span
                onClick={() => setIsSignedUp(true)}
                className="link link-primary ml-1 hover:cursor-pointer"
              >
                Login
              </span>
            </span>
        }
        <button type="submit" className="btn btn-sm btn-primary ml-auto">{currentForm}</button>
      </span>
    </form>
  );
}

export default AuthForm;