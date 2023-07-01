import React, {FC} from "react";
import IHeader from "../../../types/components/atoms/header";
import TaskName from "../taskName/TaskName";
import '../../../index.css';
import TaskDate from "../taskDate/TaskDate";
import './TaskCard.css'

const TaskCard: FC<any> = (params: any) => {
  const taskTop = params.taskTop;
  const taskBottom = params.taskBottom;

  return (
    <div className="flex-column padding container-task-card ">
      <TaskName taskTop={taskTop} taskBottom={taskBottom}/>
      <TaskDate/>
    </div>
  )
}

export default TaskCard;