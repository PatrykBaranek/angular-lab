import { Task } from './task.model';

export interface Feature {
  id: number;
  name: string;
  tasks: Task[];
}
