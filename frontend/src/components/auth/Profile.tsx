import { FC } from "react";
import { User } from "../../types/IUser";
import { logout } from "../../Hooks/auth";

interface Props {
  user?: User
}

const Profile: FC<Props> = ({ user }) => {
  const onClick = ():void => {
    logout();
    window.location.reload();
  }

  return (
    <>
      <div>
        <p>
          ユーザー:
          <span className="link link-neutral px-1 text-xl">
            {user && user.name}
          </span>
          さん
        </p>
        <p>
          登録日: 
          <span className="link link-neutral px-1 text-xl">
            {user && user.created_at}
          </span>
        </p>
        <button onClick={onClick} className="btn btn-sm btn-secondary mt-2">Logout</button>
      </div>
    </>
  )
}

export default Profile;