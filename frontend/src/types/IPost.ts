import { Diary } from "./IDiary";
import { User } from "./IUser";

export type Post = {
  id: number;
  user: User;
  diary: Diary;
}