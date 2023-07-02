import React, {FC, useEffect, useState} from "react";

import Header from "../../atoms/header/Header";
import TitleText from "../../atoms/titleText/TitleText";
import '../../../index.css';
import './FormTask.css';
import Input from "../../atoms/input/Input";
import InputDate from "../../atoms/inputDate/InputDate";
import TextArea from "../../atoms/textArea/TextArea";
import Button from "../../atoms/button/Button";
import { useFormsTask } from "../../../hooks/FormTask";

const FormTask: FC<any> = (params: any) => {
  
  const {
    isFiltered, 
    task,
    title,
    valueNameTask,
    valueDescriptionTask,
    valueDateTask,
    setIsFiltered,
    setShowForm,
    setTask,
    setTitle,
    setValueNameTask,
    setValueDescriptionTask,
    setDateTask,
  } = useFormsTask();

  const onClick = params.onClick;
  
  const handleInputName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValueNameTask(event.target.value);
  }

  const handleInputDescription = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValueDescriptionTask(event.target.value);
  }

  const handleCreateTaskButton = () => {
    let newTask = {
      taskName: valueNameTask,
      taskDescription: valueDescriptionTask,
      taskDate: valueDateTask
    }
    setTask([...task, newTask]);
    setShowForm(false);
  }

  const handleFilterTasksButton = () => {
    console.log("filter")
  }

  const handleCancelButton = () => {
    setShowForm(false);
  } 

  return (
    <form action="" className="flex-collumn justify-content-between align-center">
      <Input placeholder="Add task name..." onChange={(e) => setValueNameTask(e.target.value)}/>
      <TitleText title="Description"/>
      <TextArea placeholder="Add description..." text={valueDescriptionTask.length} maxLength={50}  
        onChange={(e) => setValueDescriptionTask(e.target.value)}/>
      <TitleText title="Date"/>
      <InputDate onChange={(e) => setDateTask(new Date(e.target.value))}/>
      <div className="flex-row justify-content-between align-center">
        <Button title="Cancel" style={{backgroundColor: "#E2EBFA",  color: "#0C61F6" }} onClick={handleCancelButton}/>
        <Button title={title} style={{backgroundColor: "#0C61F6",  color: "#E2EBFA"}} onClick={onClick}/>
      </div>
    </form>
  )
}

export default FormTask;