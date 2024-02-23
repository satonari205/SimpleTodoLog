import { useState } from "react";
import api from "./api";

const useDiary = () => {
  const [date, setDate] = useState<string>(getToday());
  const [log, setLog] = useState<string>('');
  
  const getLog = async () => {
    await api.get(`/api/diaries?date=${date}`)
      .then(res => {
        setLog(res.data.log);
      })
      .catch(e => console.log(e));
  }

  const update = () => {
    
  }
  
  const share = () => {
    //
  }


  return { date, setDate, setLog, update, share }
}

const getToday = (): string => {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export default useDiary;