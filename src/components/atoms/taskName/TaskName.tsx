import React, { FC, useState, useEffect } from "react";
import { ITaskName } from "../../../types/components/atoms/taskName";
import { useFormsTask } from "../../../hooks/FormTask";

import Checkbox from "../checkBox/CheckBox";
import '../../../index.css';
import './TaskName.css';

const TaskName: FC<ITaskName> = (params: ITaskName) => {
  const {
    checked,
    strikeThrough,
    task,
    setIsClosed,
    isClosed,
    setChecked,
    setStrikeThrough,
  } = useFormsTask();

  const taskName = params.taskName;
  const taskDescription = params.taskDescription;
  const id = params.id;
  
  const handleCheckBox = (id: any) => {
    setChecked(!checked);
    setStrikeThrough(!strikeThrough);
    setIsClosed(!checked);
    console.log("id: " + id)
  };


  return (
    <div className="flex-row justify-content-between align-center task-container">
      <div className="flex-column justify-content-between">
        <h2 className={strikeThrough ? "strike" : ""}>{taskName}</h2>
        <p className="task-bottom">{taskDescription}</p>
      </div>
      <Checkbox
        isChecked={checked}
        onChange={() => handleCheckBox(id)}
      />
    </div>

  );
  
};

export default TaskName;
