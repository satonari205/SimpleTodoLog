import { FC } from "react";
import Tab from "./tabs/Tab";

const Nav: FC = () => {
  return (
    <div role="tablist" className="tabs tabs-lifted">
      <Tab tabName="todos" path="todos"/>
      <Tab tabName="diary" path="diary"/>
      <Tab tabName="logs" path="logs"/>
      <Tab tabName="profile" path=""/>
    </div>
  );
}

export default Nav;