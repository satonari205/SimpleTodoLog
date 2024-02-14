import { FC } from "react";
import { Outlet } from "react-router-dom";
import Nav from "../components/nav/Nav";

const Layouts: FC = () => {
  return (
    <>
      <div className="h-screen p-4">
        <div className="flex flex-col max-w-2xl mx-auto">
          <Nav />
          <div
            className="overflow-y-scroll p-4 border rounded-b-xl border-t-0"
            style={{height:'90vh'}}
          >
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default Layouts;