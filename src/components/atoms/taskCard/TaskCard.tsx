import {FC} from "react";

import TaskName from "../taskName/TaskName";
import ButtonIcon from "../buttonIcon/ButtonIcon";
import TaskDate from "../taskDate/TaskDate";
import Delete from '../../../assets/delete.png';

import './TaskCard.css'
import '../../../index.css';

const TaskCard: FC<any> = (params: any) => {
  const onClick = params.onClick;
  const task = params.task;

  return (
    <div className="flex-column padding container-task-card border-radius" data-testid={`task-${task.id}`}>
      <TaskName task={task}/>
      <div className="flex-row align-center justify-content-between border">
        <TaskDate date={task.date} data-testid={`task-date-${task.id}`}/>
        <ButtonIcon id={task.id} icon={Delete} onClick={onClick} />
      </div>
    </div>
  )
}

export default TaskCard;

