import { FC } from "react";
import { Oval } from "react-loader-spinner";
import AuthForm from "../components/profile/AuthForm";
import UserInfo from "../components/profile/UserInfo";
import useUser from "../Hooks/useUser";

export const Profile: FC = () => {
  const { user, isLoading, isError } = useUser();

  if (isLoading) return (
    <div className="mx-auto w-8 h-8">
      <Oval visible={true} height="32" width="32" color="#411DD8" ariaLabel="oval-loading" />
    </div>
  );

  if (isError) return <AuthForm />;

  return <UserInfo user={user}/>;
}