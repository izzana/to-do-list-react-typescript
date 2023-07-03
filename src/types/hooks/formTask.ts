import { ITask } from "../components/molecules/listTask";

interface ITaskContext {
  currentTask: ITask | undefined;
  filteredTasks: ITask[]; 
  isFiltered: boolean; 
  nextid: number;
  showForm: boolean;
  tasks: ITask[];
  title: string;
  deleteTask: (value: any) => void;
  setCurrentTask: (value: any) => void;
  setFilteredTasks:(value: any) => void;
  setNextid: (value: any) => void;
  setIsFiltered: (value: boolean) => void;
  setShowForm: (value: boolean) => void;
  setTasks: (value: any) => void;
  setTitle: (value: string) => void;
  parseStrToDate: (date: string) => void;   
  handleFilterTasksButton: () => void;
}

export type {ITaskContext};