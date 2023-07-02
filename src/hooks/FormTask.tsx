import React, { FC, createContext, useContext, useState } from 'react'

import {IFormTaskContext} from '../types/hooks/formTask';
import {IListTask, ITask} from '../types/components/molecules/listTask'
const FormTaskContext = createContext<IFormTaskContext>({} as IFormTaskContext);

export const FormsTaskProvider: FC<any> = ({ children }) => {

  const [checked, setChecked] = useState<boolean>(false);
  const [showForm, setShowForm] = useState(false);
  const [strikeThrough, setStrikeThrough] = useState<boolean>(false);
  const [task, setTask] = useState<ITask[]>([]);
  const [title, setTitle] = useState<string>("");
  const [valueNameTask, setValueNameTask] = useState<string>("");
  const [valueDescriptionTask, setValueDescriptionTask] = useState<string>("");
  const [valueDateTask, setDateTask] = useState<Date | string>();

    return (
        <FormTaskContext.Provider value={{
          checked,
          showForm,
          strikeThrough,
          task,
          title,
          valueNameTask,
          valueDescriptionTask,
          valueDateTask,
          setChecked,
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