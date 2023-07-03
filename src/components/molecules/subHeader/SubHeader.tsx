  import React, {FC, useState, useEffect} from 'react';
  import ButtonIcon from '../../atoms/buttonIcon/ButtonIcon';
  import Form from '../form/Form';

  import TaskHeaderDate from '../../atoms/taskHeaderDate/TaskHeaderDate';
  import { useFormsTask } from '../../../hooks/Task';
  import '../../../index.css';
  import './SubHeader.css';
  import Add from '../../../assets/add.png';
  import Filter from '../../../assets/filter.png'

  const SubHeader: FC<any> = (params: any) => {
    const {
      currentTask,
      filteredTasks,
      isFiltered,
      nextid,
      tasks,
      title,
      showForm,
      setCurrentTask,
      setFilteredTasks,
      setIsFiltered,
      setNextid,
      setShowForm,
      setTasks,
      setTitle,
      handleFilterTasksButton
    } = useFormsTask();

    const handleClickTask = () => {
      setShowForm(true);
      setTitle('Create Task');
    };

    const handleClickFilter = () => {
      setShowForm(true);
      setTitle('Filter Task');
    };

    const handleCreateTaskButton = () => {
      if (!currentTask?.name) {
        setShowForm(true);
        alert('Preencha o campo de nome da task');
      } else if (!currentTask?.description) {
        setShowForm(true);
        alert('Preencha o campo de descrição da task');
      } else if (!currentTask?.date) {
        setShowForm(true);
        alert('Selecione uma data para a task');
      } else {
        setNextid((previd: any) => previd + 1);
        setTasks([...tasks, {...currentTask, id: nextid}]);
        setShowForm(false);
        setCurrentTask(undefined);
      }
    }

    const handleFormButton = title === 'Create Task' ? handleCreateTaskButton : handleFilterTasksButton;
    
    useEffect(() => {
      if (tasks.length > 0) {
        handleFilterTasksButton();
      }
    }, [tasks]);
    
    return (
      <div className='flex-row align-center justify-content-between padding container-sub-header'>
        <TaskHeaderDate title="Today's Task"/>
        {showForm ? (
          <Form title={title} onClick={handleFormButton} />
        ) : null}
        <div className='flex-row justify-content-between container-button'>
          <ButtonIcon 
            id='create' 
            icon={Add}
            onClick={() => handleClickTask()}
          />
          <ButtonIcon 
            id='filter' 
            icon={Filter} 
            onClick={() => handleClickFilter()}
          />
        </div>
      </div>
    )
  }

  export default SubHeader;