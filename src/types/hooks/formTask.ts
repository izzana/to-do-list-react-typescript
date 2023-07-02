import { ITask } from "../components/molecules/listTask";

interface IFormTaskContext {
  checked: boolean;
  filteredTasks: ITask[]; 
  isFiltered: boolean; 
  nextTaskId: number;
  showForm: boolean;
  strikeThrough: boolean;
  task: ITask[];
  title: string;
  valueNameTask: string;
  valueDescriptionTask: string;
  valueDateTask: Date | string | number | undefined;
  deleteTask: (value: any) => void;
  setChecked: (value: boolean) => void;
  setFilteredTasks:(value: any) => void;
  setNextTaskId: (value: any) => void;
  setIsFiltered: (value: boolean) => void;
  setShowForm: (value: boolean) => void;
  setStrikeThrough: (value: boolean) => void;
  setTask: (value: any) => void;
  setTitle: (value: string) => void;  
  setValueNameTask: (value: string) => void;  
  setValueDescriptionTask: (value: string) => void; 
  setDateTask: (value: Date | string) => void;  
}

export type {IFormTaskContext};