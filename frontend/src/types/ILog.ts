import { Diary } from "./IDiary"
import { User } from "./IUser"

export interface ILog {
  id: number,
  caption: string,
  user: User,
  diary: Diary,
  created_at: string,
  updated_at: string,
}