import React, {FC} from "react";

import TaskCard from "../../atoms/taskCard/TaskCard";
import './ListTasks.css'
import { useFormsTask } from "../../../hooks/FormTask";

const ListTasks: FC<any> = (params: any) => {
  const {
    task,
  } = useFormsTask();
 
  console.log(task)

  return (
    <div className="flex-column container-list-tasks align-center border-radius">
      {task.map((value, index) => (
        <TaskCard key={index} taskName={value.taskName} taskDescription={value.taskDescription} taskDate={value.taskDate}/>
      ))}
    </div>
  )
}

export default ListTasks;