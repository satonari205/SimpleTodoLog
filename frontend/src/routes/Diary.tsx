import { FC } from "react";
import { RecoilRoot } from "recoil";
import Date from "../components/diary/Date";
import DoneList from "../components/diary/DoneList";
import DiaryForm from "../components/diary/DiaryForm";

const Diary: FC = () => {
  return (
    <>
      <RecoilRoot>
        <Date />
        <DoneList />
        <DiaryForm />
      </RecoilRoot>
    </>
  );
}

export default Diary;