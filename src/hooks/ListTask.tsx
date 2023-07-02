import React, { FC, createContext, useContext, useState } from 'react'

import { IListTaskContent } from '../types/hooks/listTask';

const ListTaskContext = createContext<IListTaskContent>({} as IListTaskContent);

export const ListsTaskProvider: FC<any> = ({ children }) => {

  const [checked, setChecked] = useState<boolean>(false);
  const [strikeThrough, setStrikeThrough] = useState<boolean>(false);
  const [valueNameTask, setValueNameTask] = useState<string>("");
  const [valueDescriptionTask, setValueDescriptionTask] = useState<string>("");
  const [valueDateTask, setDateTask] = useState<Date | string>();

    return (
        <ListTaskContext.Provider value={{
          checked,
          strikeThrough,
          valueNameTask,
          valueDescriptionTask,
          valueDateTask,
          setChecked,
          setStrikeThrough,
          setValueNameTask,
          setValueDescriptionTask,
          setDateTask,
        }}>{children}</ListTaskContext.Provider>
    )
}

export function useListTask() {
    const context = useContext(ListTaskContext);

    if (!context) {
        throw new Error('useListTask must be used within an ListTaskProvider')
    }

    return context;
}