import React, {FC, useState, useEffect} from "react";
import ButtonIcon from "../../atoms/buttonIcon/ButtonIcon";
import Form from "../form/Form";
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import TaskHeaderDate from "../../atoms/taskHeaderDate/TaskHeaderDate";
import { useFormsTask } from "../../../hooks/FormTask";
import '../../../index.css';
import './SubHeader.css';
import Add from '../../../assets/add.png';
import Filter from '../../../assets/filter.png'

const SubHeader: FC<any> = (params: any) => {
  const {
    filteredTasks,
    isFiltered,
    nextTaskId,
    task,
    title,
    showForm,
    valueNameTask,
    valueDescriptionTask,
    valueDateTask,
    setFilteredTasks,
    setIsFiltered,
    setNextTaskId,
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
      taskId: nextTaskId,
      taskName: valueNameTask,
      taskDescription: valueDescriptionTask,
      taskDate: valueDateTask
    };

    setTask([...task, newTask]);

    setNextTaskId((prevTaskId: any) => prevTaskId + 1);
    if (valueNameTask === "" && valueDateTask === "") { //#TODO Finalizar essa checagem pois atualmente aparece o alert, mas a task ainda é criada vazia
      setShowForm(true);
      alert("Preencha os campos para criar a task");
    }

    if(newTask) {
      setShowForm(false);
    }

    setValueNameTask("");
    setValueDescriptionTask("");
    setDateTask("");
  }

  const handleFilterTasksButton = () => {
    console.log("filter");
    setShowForm(false);
    
    let filterTasks = task;
    console.log(filterTasks)

    if (valueDescriptionTask) {
      filterTasks = filterTasks.filter(item => item.taskDescription.trim() === valueDescriptionTask.trim());
      console.log(filterTasks)
    }

    if (valueNameTask) {
      filterTasks = filterTasks.filter(item => item.taskName === valueNameTask);
      console.log(filterTasks)
    }

    if (valueDateTask) {
      const filterDate = new Date(valueDateTask);
      filterTasks = filterTasks.filter(item => filterDate.getTime() === new Date(item.taskDate).getTime());
    }

    setFilteredTasks(filterTasks);
    setIsFiltered(true);
    setValueNameTask("");
    setValueDescriptionTask("");
    setDateTask("");
    console.log("tasks filtradas: ", filterTasks);
  }

  const handleFormButton = title === "Create Task" ? handleCreateTaskButton : handleFilterTasksButton;
  
  useEffect(() => {
    if (task.length > 0) {
      handleFilterTasksButton();
    }
  }, [task]);
  
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