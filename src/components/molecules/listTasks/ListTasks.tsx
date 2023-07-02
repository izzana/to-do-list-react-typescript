import React, {FC, useEffect} from "react";

import TaskCard from "../../atoms/taskCard/TaskCard";
import './ListTasks.css'
import { useFormsTask } from "../../../hooks/FormTask";

const ListTasks: FC<any> = (params: any) => {
  const {
    task,
    deleteTask,
    filteredTasks,
    setFilteredTasks,
    isFiltered,
  } = useFormsTask();

  const renderTasks = isFiltered ? filteredTasks : task;

  const handleDeleteTask = (id: number) => {
    deleteTask(id);
  };

  useEffect(() => {
    if (isFiltered) {
      setFilteredTasks(task);
    }
    console.log("tasks filtradas atualizadas: ", filteredTasks);
    console.log("tasks total: ", task);

  }, [task, filteredTasks]);

  console.log("task:" + task)

  return (
    <div className="flex-column container-list-tasks align-center border-radius">
      {renderTasks.map((value, index) => (
        <TaskCard key={value.taskId} taskName={value.taskName} taskDescription={value.taskDescription} taskDate={value.taskDate} onClick={() => handleDeleteTask(value.taskId)}/>
      ))}
    </div>
  )
}

export default ListTasks;