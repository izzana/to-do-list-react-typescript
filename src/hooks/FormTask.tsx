import React, { FC, createContext, useContext, useState } from 'react'

import {IFormTaskContext} from '../types/hooks/formTask';
import {IListTask, ITask} from '../types/components/molecules/listTask'
const FormTaskContext = createContext<IFormTaskContext>({} as IFormTaskContext);

export const FormsTaskProvider: FC<any> = ({ children }) => {

  const [checked, setChecked] = useState<boolean>(false);
  const [isFiltered, setIsFiltered] = useState(false);
  const [nextTaskId, setNextTaskId] = useState(1);
  const [filteredTasks, setFilteredTasks] = useState<ITask[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [strikeThrough, setStrikeThrough] = useState<boolean>(false);
  const [task, setTask] = useState<ITask[]>([]);
  const [title, setTitle] = useState<string>("");
  const [valueNameTask, setValueNameTask] = useState<string>("");
  const [valueDescriptionTask, setValueDescriptionTask] = useState<string>("");
  const [valueDateTask, setDateTask] = useState<Date | string | number>();

  const deleteTask = (id: number) => {
    const updatedTasks = task.filter((task) => task.taskId !== id);
    setTask(updatedTasks);
  };
  
    return (
        <FormTaskContext.Provider value={{
          checked,
          deleteTask,
          filteredTasks,
          isFiltered,
          nextTaskId, 
          showForm,
          strikeThrough,
          task,
          title,
          valueNameTask,
          valueDescriptionTask,
          valueDateTask,
          setChecked,
          setFilteredTasks,
          setNextTaskId,
          setIsFiltered,
          setShowForm,
          setStrikeThrough,
          setTask,
          setTitle,
          setValueNameTask,
          setValueDescriptionTask,
          setDateTask,
        }}>{children}</FormTaskContext.Provider>
    )

    
}

export function useFormsTask() {
    const context = useContext(FormTaskContext);

    if (!context) {
        throw new Error('useFormsTask must be used within an FormsTaskProvider')
    }

    return context;
}