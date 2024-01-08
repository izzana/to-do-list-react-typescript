import {FC, useEffect} from "react";

import TaskCard from "../../atoms/taskCard/TaskCard";
import { useFormsTask } from "../../../hooks/Task";

import './ListTasks.css'

const ListTasks: FC<any> = (params: any) => {
  const {
    tasks,
    deleteTask,
    filteredTasks,
    setFilteredTasks,
    isFiltered,
    parseStrToDate,
    setTasks,
  } = useFormsTask();

  const handleDeleteTask = (id: number) => {
    deleteTask(id);
    localStorage.setItem("tasks",JSON.stringify([]));
    setFilteredTasks([]);
  };

  useEffect(() => {
    let storedTasks = localStorage.getItem("tasks");
    if (typeof storedTasks === 'string') {
      const parsedTasks = JSON.parse(storedTasks);
      if (Array.isArray(parsedTasks)) {
        const tasks = parsedTasks.map((task: any) => {
          task.date = parseStrToDate(task.date.split('T')[0]);
          return task;
        });
        setTasks(tasks);
      }
    }
  }, []);

  useEffect(() => {
    if (!isFiltered) {
      setFilteredTasks(tasks);
    }

    if(tasks.length) {
      localStorage.setItem("tasks",JSON.stringify(tasks));
    }
  }, [tasks, filteredTasks, isFiltered]);

  const renderTasks = isFiltered ? filteredTasks : tasks;

  return (
    <div className="flex-column container-list-tasks align-center border-radius">
      {renderTasks.map((task, index) => (
        <TaskCard task={task} id={task.id} key={task.id} onClick={() => handleDeleteTask(task.id)}/>
      ))}
    </div>
  )
}

export default ListTasks;