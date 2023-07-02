interface IListTask {
  task: ITask[];
}

interface ITask {
  taskName: string;
  taskDescription: string;
  taskDate: Date | string;
  taskId: number;
}

export type {IListTask, ITask};