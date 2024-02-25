import { useState } from "react";
import api from "./api";

const useDiary = () => {
  const [date, setDate] = useState<string>(getToday());
  const [log, setLog] = useState<string>('');
  const [error, setError] = useState<string>('');
  
  const getLog = async () => {
    await api.get(`/api/diaries?date=${date}`)
      .then(res => {
        setLog(res.data[0].log);
      })
      .catch(e => setError(e.message));
  }

  const update = async () => {
    await api.get(`/api/diaries?date=${date}`)
      .then( async (res) => {
        if (res.data.length === 0) {
          await api.post('/api/diaries', {"log" : log});
          return;
        }
        await api.patch('/api/diaries', {"log" : log});
      })
      .catch((e) => {
        setError(e.message);
      });
  }
  
  const share = async () => {
    await api.post('/api/logs', { "date" : date })
      .then(res => console.log(res))
      .catch(e => console.log(e));
  }


  return { date, log, error, setDate, getLog, setLog, update, share }
}

const getToday = (): string => {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export default useDiary;