import { FC, useState } from "react";
import api from "../Hooks/api";
import LoginForm from "../components/form/login";

export const User: FC = () => {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  
  return (
    <>
      <div className="overflow-y-scroll" style={{ height: '75vh' }}>
        <LoginForm />
      </div>
    </>
  );
}