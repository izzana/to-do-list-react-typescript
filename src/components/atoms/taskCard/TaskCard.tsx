import React, {FC} from "react";
import TaskName from "../taskName/TaskName";
import '../../../index.css';
import ButtonIcon from "../buttonIcon/ButtonIcon";
import TaskDate from "../taskDate/TaskDate";
import Delete from '../../../assets/delete.png';
import './TaskCard.css'

const TaskCard: FC<any> = (params: any) => {
  const onClick = params.onClick;
  const task = params.task;

  return (
    <div className="flex-column padding container-task-card border-radius">
      <TaskName task={task}/>
      <div className="flex-row align-center justify-content-between border">
        <TaskDate date={task.date}/>
        <ButtonIcon id={"delete"} icon={Delete} onClick={onClick}/>
      </div>
    </div>
  )
}

export default TaskCard;

