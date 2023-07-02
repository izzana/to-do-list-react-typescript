import React, {FC} from "react";
import TaskName from "../taskName/TaskName";
import '../../../index.css';
import TaskDate from "../taskDate/TaskDate";
import './TaskCard.css'

const TaskCard: FC<any> = (params: any) => {
  const taskDate = params.taskDate;
  const taskName = params.taskName;
  const taskDescription = params.taskDescription;

  return (
    <div className="flex-column padding container-task-card border-radius">
      <TaskName taskName={taskName} taskDescription={taskDescription}/>
      <TaskDate taskDate={taskDate}/>
    </div>
  )
}

export default TaskCard;