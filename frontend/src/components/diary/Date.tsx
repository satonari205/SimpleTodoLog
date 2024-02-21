import { FC } from "react";
import useDiary from "../../Hooks/useDiary";

const Date: FC = () => {
  const { date, setDate } = useDiary();

  return (
    <>
      <div className="flex justify-between gap-2 w-full">
        <span className="font-bold">Diary</span>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      </div>
    </>
  );
}

export default Date;