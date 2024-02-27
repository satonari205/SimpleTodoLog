import { useState } from "react";
import api from "./api";
import { ILog } from "../types/ILog";
import useDiary from "./useDiary";

const useLog = () => {
  const [logs, setLogs] = useState<ILog[]>();
  const [log, setLog] = useState<ILog>();
  const [caption, setCaption] = useState<string>('');
  const [msg, setMsg] = useState<string>('');
  const { date } = useDiary();

  const getLogs = async (user_id: number|null = null): Promise<void> => {
    const url = (user_id === null) ? '/api/logs' : `/api/logs?user=${user_id}`;
    await api.get(url).then(res => setLogs(res.data.data)).catch(e => setMsg(e.message));
  }

  const getLog = async (id: number) => {
    await api.get(`/api/logs/${id}`)
      .then(res => setLog(res.data))
      .catch(e => setMsg(e.message));
  }

  const storeLog = async () => {
    await api.post('/api/logs', {date: date, caption: caption})
      .then(res => {
        const message = (res.status === 200) ? "log's shared successfully." : "Failed";
        setMsg(message);
      })
      .catch(e => setMsg(e.message));
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

  return { log, logs, msg, setCaption, getLogs, getLog, storeLog, updateLog, deleteLog }
}

export default useLog;