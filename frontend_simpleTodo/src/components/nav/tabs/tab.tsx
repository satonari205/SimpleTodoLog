import { FC } from "react";
import { useNavigate } from "react-router-dom";

export const Tab: FC = ({ tabName }) => {
  const nav = useNavigate();
  const pageHandler = () => {
    nav(`/${tabName}`);
  }

  return (
    <button role="tab" className="tab" onClick={pageHandler}>
      {tabName}
    </button>
  );
}