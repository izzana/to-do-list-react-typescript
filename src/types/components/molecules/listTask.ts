interface IListTask {
  task: ITask[];
}

interface ITask {
  taskName: string;
  taskDescription: string;
  taskDate: Date | string;
}

export type {IListTask, ITask};