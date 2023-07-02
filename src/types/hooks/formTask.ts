import { ITask } from "../components/molecules/listTask";

interface IFormTaskContext {
  checked: boolean;
  showForm: boolean;
  strikeThrough: boolean;
  task: ITask[];
  title: string;
  valueNameTask: string;
  valueDescriptionTask: string;
  valueDateTask: Date | string | undefined;
  setChecked: (value: boolean) => void;
  setShowForm: (value: boolean) => void;
  setStrikeThrough: (value: boolean) => void;
  setTask: (value: any) => void;
  setTitle: (value: string) => void;  
  setValueNameTask: (value: string) => void;  
  setValueDescriptionTask: (value: string) => void; 
  setDateTask: (value: Date | string) => void;  
}

export type {IFormTaskContext};