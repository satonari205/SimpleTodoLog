import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import LogList from "../components/logs/LogList";
import LogDetail from "../components/logs/LogDetail";
import UsersLogs from "../components/logs/UsersLogs";

const Logs: FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LogList />} />
        <Route path="/user/:id" element={<UsersLogs />}/>
        <Route path="/:id" element={<LogDetail />}/>
      </Routes>
    </>
  );
}

export default Logs;