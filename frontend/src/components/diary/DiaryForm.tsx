import { FC, useEffect } from "react";
import useDiary from "../../Hooks/useDiary";
import ShareButton from "../logs/ShareButton";

const DiaryForm: FC = () => {
  const { log, error, getLog, setLog, update } = useDiary();

  useEffect(() => {
    getLog();
  }, [])

  return (
    <>
      <p className="text-red-500 text-center">{error}</p>
      <textarea
        className="textarea textarea-bordered w-full h-3/6"
        value={log}
        onChange={(e) => setLog(e.target.value)}
      />
      <div className="flex justify-between py-2">
        <ShareButton />
        <button className="btn btn-sm btn-primary" onClick={update}>submit</button>
      </div>
    </>
  );
}

export default DiaryForm;