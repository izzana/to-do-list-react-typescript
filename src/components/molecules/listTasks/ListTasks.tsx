import React, {FC, useState} from "react";

import TaskCard from "../../atoms/taskCard/TaskCard";
import './ListTasks.css'

const ListTasks: FC<any> = (params: any) => {

  const [task, setTask] = useState<any>([
    {taskTop: "Estudar", taskBottom: "Estudar"},
    {taskTop: "Ir ao mercado", taskBottom: "Ir ao mercado"}
  ])

  return (
    <div className="flex-column container-list-tasks align-center">
      {task.map((value: any) => (
        <TaskCard taskTop={value.taskTop} taskBottom={value.taskBottom}/>
      ))}
    </div>
  )
}

export default ListTasks;