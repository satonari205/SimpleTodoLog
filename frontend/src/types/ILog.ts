import { Diary } from "./IDiary"
import { User } from "./IUser"

export type Log = {
  id: number,
  caption: string,
  user: User,
  diary: Diary,
  created_at: string,
  updated_at: string,
}