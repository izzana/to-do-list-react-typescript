interface ITask {
  date: Date | string;
  description: string;
  id: number;
  isClosed: boolean;
  name: string;
}

export type { ITask };