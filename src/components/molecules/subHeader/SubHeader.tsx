import React, {FC, useState} from "react";
import ButtonIcon from "../../atoms/buttonIcon/ButtonIcon";
import Form from "../form/Form";

import TaskHeaderDate from "../../atoms/taskHeaderDate/TaskHeaderDate";
import { useFormsTask } from "../../../hooks/FormTask";
import '../../../index.css';
import './SubHeader.css';
import Add from '../../../assets/add.png';
import Filter from '../../../assets/filter.png'

const SubHeader: FC<any> = (params: any) => {
  const {
    task,
    title,
    showForm,
    valueNameTask,
    valueDescriptionTask,
    valueDateTask,
    setShowForm,
    setTask,
    setTitle,
    setValueNameTask,
    setValueDescriptionTask,
    setDateTask,
  } = useFormsTask();

  const handleClickTask = () => {
    setShowForm(true);
    setTitle("Create Task");
  };

  const handleClickFilter = () => {
    setShowForm(true);
    setTitle("Filter Task");
  };

  const handleCreateTaskButton = () => {
    let newTask = {
      taskName: valueNameTask,
      taskDescription: valueDescriptionTask,
      taskDate: valueDateTask
    };
    setTask([...task, newTask]);
    setShowForm(false);
  }

  const handleFilterTasksButton = () => {
    console.log("filter");
    setShowForm(false);
  }

  const handleFormButton = title === "Create Task" ? handleCreateTaskButton : handleFilterTasksButton;

  return (
    <div className="flex-row align-center justify-content-between padding">
      <TaskHeaderDate title="Today's Task"/>
      {showForm ? (
        <Form title={title} onClick={handleFormButton} />
      ) : null}
      <div className="flex-row justify-content-between container-button">
        <ButtonIcon 
          id="create" 
          icon={Add}
          onClick={() => handleClickTask()}
        />
        <ButtonIcon 
          id="filter" 
          icon={Filter} 
          onClick={() => handleClickFilter()}
        />
      </div>
    </div>
  )
}

export default SubHeader;