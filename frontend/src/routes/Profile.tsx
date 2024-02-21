import { FC } from "react";
import AuthForm from "../components/profile/AuthForm";
import UserInfo from "../components/profile/UserInfo";
import useUser from "../Hooks/useUser";

const Profile: FC = () => {
  const { user, isLoading, isError } = useUser();

  if (isLoading) return (
    <div className="w-10 mx-auto mt-10">
      <span className="loading loading-spinner text-primary"></span>
    </div>
  );

  if (isError) return <AuthForm />;

  return <UserInfo user={user}/>;
}

export default Profile;