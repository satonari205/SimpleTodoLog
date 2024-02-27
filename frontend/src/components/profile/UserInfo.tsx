import { FC } from "react";
import { User } from "../../types/IUser";
import { logout } from "../../Hooks/auth";
import { ILog } from "../../types/ILog";
import Log from "../logs/Log";
import useLog from "../../Hooks/useLog";

interface Props {
  user?: User;
  logs?: ILog[];
}

const UserInfo: FC<Props> = (props) => {
  const { getLogs } = useLog();

  return (
    <>
      <div>
        <p>
          ユーザー:
          <span className="link link-neutral px-1 text-xl">
            {props.user && props.user.name}
          </span>
          さん
        </p>
        <p>
          登録日: 
          <span className="link link-neutral px-1 text-xl">
            {props.user && props.user.created_at}
          </span>
        </p>
        <button onClick={logout} className="btn btn-sm btn-secondary mt-2">Logout</button>
      </div>
      <hr className="my-3" />
      <div className="flex flex-col gap-2">
        {
          props.logs
            ? props.logs.map(log => <Log key={log.id} log={log} />)
            : <h1>Logは共有されていません。</h1>
        }
      </div>
    </>
  )
}

export default UserInfo;