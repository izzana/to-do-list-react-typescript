import React, {FC, useState} from "react";
import {ITaskName} from "../../../types/components/atoms/taskName";
import Checkbox from "../checkBox/CheckBox";
import '../../../index.css';
import './TaskName.css'

const TaskName: FC<ITaskName> = (params: ITaskName) => {
  const taskName = params.taskName;
  const taskDescription = params.taskDescription;

  const [checked, setChecked] = useState<boolean>(false);
  const [strikeThrough, setStrikeThrough] = useState<boolean>(false);

  const handleCheckBox = () => {
    setChecked(!checked);
    setStrikeThrough(!strikeThrough);
  } 

  return (
    <div className="flex-row justify-content-between align-center task-container">
      <div className="flex-column justify-content-between">
      <h2 className={strikeThrough ? "strike" : ""}>{taskName}</h2>
        <p className="task-bottom">{taskDescription}</p>
      </div>
      <Checkbox 
        isChecked={checked}
        onChange={handleCheckBox}
      />
    </div>
  )
}

export default TaskName;