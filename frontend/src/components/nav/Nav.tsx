import { FC } from "react";
import { Tab } from "./tabs/tab";

const Nav: FC = () => {
  return (
    <div role="tablist" className="tabs tabs-boxed">
      <Tab tabName="todos"/>
      <Tab tabName="diary"/>
      <Tab tabName="calender"/>
      <Tab tabName="user"/>
    </div>
  );
}

export default Nav;