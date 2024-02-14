import { FC } from "react";
import { useNavigate } from "react-router-dom";

type Props = {
  tabName: string;
  path: string;
}

const Tab: FC<Props> = ( props ) => {
  const navigate = useNavigate();
  const isTabActive = (props.path === window.location.pathname.substring(1))
    ? "tab tab-active" : "tab";

  return (
    <button role="tab" className={isTabActive} onClick={() => navigate(`/${props.path}`)}>
      {props.tabName}
    </button>
  );
}

export default Tab;