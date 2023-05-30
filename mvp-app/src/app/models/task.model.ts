export interface Task {
  id: number;
  name: string;
  status: 'todo' | 'doing' | 'done';
  featureId: number;

}
