import React, {FC} from "react";
import TaskName from "../taskName/TaskName";
import '../../../index.css';
import ButtonIcon from "../buttonIcon/ButtonIcon";
import TaskDate from "../taskDate/TaskDate";
import Delete from '../../../assets/delete.png';
import './TaskCard.css'

const TaskCard: FC<any> = (params: any) => {
  const taskDate = params.taskDate;
  const taskName = params.taskName;
  const taskDescription = params.taskDescription;
  const onClick = params.onClick;

  return (
    <div className="flex-column padding container-task-card border-radius">
      <TaskName taskName={taskName} taskDescription={taskDescription}/>
      <div className="flex-row align-center justify-content-between border">
        <TaskDate taskDate={taskDate}/>
        <ButtonIcon id={"delete"} icon={Delete} onClick={onClick}/>
      </div>
    </div>
  )
}

export default TaskCard;