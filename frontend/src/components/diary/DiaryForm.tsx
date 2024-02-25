import { FC, useEffect } from "react";
import useDiary from "../../Hooks/useDiary";

const DiaryForm: FC = () => {
  const { log, error, getLog, setLog, share, update } = useDiary();

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
        <button className="btn btn-sm btn-accent" onClick={share}>share</button>
        <button className="btn btn-sm btn-primary" onClick={update}>submit</button>
      </div>
    </>
  );
}

export default DiaryForm;