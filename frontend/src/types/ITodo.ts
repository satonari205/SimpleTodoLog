export interface Todo {
  id: number;
  user_id?: number;
  title: string;
  done: boolean;
  created_at?: string;
  updated_at?: string;
}