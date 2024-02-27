import { useState } from "react";
import api from "./api";
import { Log } from "../types/ILog";
import useDiary from "./useDiary";

const useLog = () => {
  const [logs, setLogs] = useState<Log[]>();
  const [caption, setCaption] = useState<string>('');
  const [msg, setMsg] = useState<string>('');
  const { date } = useDiary();

  const getLogs = async () => {
    await api.get('/api/logs')
      .then(res => setLogs(res.data.data))
      .catch(e => setMsg(e.message));
  }

  const getLog = async (id: number) => {
    //await api.get(`/api/logs/${id}`);
  }

  const storeLog = async () => {
    await api.post('/api/logs', {date: date, caption: caption})
      .then(res => {
        const message = (res.status === 200)
          ? "log's shared successfully."
          : "Failed";
        setMsg(message);
      });
  }

  const updateLog = async (id: number) => {
    await api.patch(`/api/logs/${id}`, {caption: caption})
      .then(res => setMsg(`caption updated, ${res.data.caption}`))
      .catch(e => setMsg(e.message));
  }

  const deleteLog = async (id: number) => {
    await api.delete(`/api/logs/${id}`)
      .then(res => setMsg(res.data.message))
      .catch(e => setMsg(e.message));
  }

  return { logs, msg, getLogs, getLog, storeLog, updateLog, deleteLog }
}

export default useLog;