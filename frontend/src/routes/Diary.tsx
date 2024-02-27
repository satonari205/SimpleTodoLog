import { FC } from "react";
import Date from "../components/diary/Date";
import DoneList from "../components/diary/DoneList";
import DiaryForm from "../components/diary/DiaryForm";

const Diary: FC = () => {
  return (
    <>
      <Date />
      <DoneList />
      <DiaryForm />
    </>
  );
}

export default Diary;