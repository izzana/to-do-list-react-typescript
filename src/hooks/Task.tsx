import React, { FC, createContext, useContext, useState } from 'react'
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { ITaskContext } from '../types/hooks/formTask';
import { ITask } from '../types/components/molecules/listTask'
const TaskContext = createContext<ITaskContext>({} as ITaskContext);

export const TaskProvider: FC<any> = ({ children }) => {

  const [currentTask, setCurrentTask] = useState<ITask>();
  const [isFiltered, setIsFiltered] = useState(false);
  const [nextid, setNextid] = useState<number>(1);
  const [filteredTasks, setFilteredTasks] = useState<ITask[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [title, setTitle] = useState<string>("");

  const deleteTask = (id: number) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const handleFilterTasksButton = () => {
    setShowForm(false);

    let filterTasks = tasks;
    if(currentTask !== undefined) {
      if (currentTask.description) {
        filterTasks = filterTasks.filter(
          (item) => item.description.trim() === currentTask.description.trim()
        );
      }
  
      if (currentTask.name) {
        filterTasks = filterTasks.filter(
          (item) => item.name === currentTask.name
        );
      }
  
      if (currentTask.date) {
        const filterDate = new Date(currentTask.date);
        filterTasks = filterTasks.filter(
          (item) =>
            filterDate.getTime() === new Date(item.date).getTime()
        );
    }
  }

    setFilteredTasks(filterTasks);
    setIsFiltered(true);
    setCurrentTask(undefined);
  };

  const parseStrToDate = (date: string) => {
    const inputDate = date;
    const [year, month, day] = inputDate.split('-');
    const selectedDate = new Date(Number(year), Number(month) - 1, Number(day));
    return formatDate(selectedDate);
  }

  const formatDate = (date: any) => {
    const formattedDate = format(date, 'eeee, dd MMMM', { locale: ptBR});
    return new Date(formattedDate);
  }
  
    return (
        <TaskContext.Provider value={{
          currentTask,
          deleteTask,
          filteredTasks,
          isFiltered,
          nextid, 
          showForm,
          tasks,
          title,
          parseStrToDate,
          setCurrentTask,
          setFilteredTasks,
          setNextid,
          setIsFiltered,
          setShowForm,
          setTasks,
          setTitle,
          handleFilterTasksButton,
        }}>{children}</TaskContext.Provider>
    )

    
}

export function useFormsTask() {
    const context = useContext(TaskContext);

    if (!context) {
        throw new Error('useFormsTask must be used within an TaskProvider')
    }

    return context;
}