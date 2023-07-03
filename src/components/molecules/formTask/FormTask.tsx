import React, {FC, useEffect, useState} from 'react';

import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import Header from '../../atoms/header/Header';
import TitleText from '../../atoms/titleText/TitleText';
import '../../../index.css';
import './FormTask.css';
import Input from '../../atoms/input/Input';
import InputDate from '../../atoms/inputDate/InputDate';
import TextArea from '../../atoms/textArea/TextArea';
import Button from '../../atoms/button/Button';
import { useFormsTask } from '../../../hooks/Task';

const FormTask: FC<any> = (params: any) => {
  
  const {
    isFiltered, 
    tasks,
    currentTask,
    title,
    parseStrToDate,
    setIsFiltered,
    setCurrentTask,
    setShowForm,
    setTasks,
    setTitle,
  } = useFormsTask();

  const onClick = params.onClick;
  
  const handleInputName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentTask({...currentTask, name: event.target.value});
  }

  const handleInputDescription = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCurrentTask({...currentTask, description: event.target.value});
  }

  const handleInputData = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedDate = parseStrToDate(event.target.value);

    setCurrentTask({...currentTask, date: selectedDate});
  }

  const handleCancelButton = () => {
    setShowForm(false);
    setCurrentTask(undefined);
  } 

  return (
    <form action='' className='justify-content-between align-center'>
      <Input placeholder='Add task name...' onChange={handleInputName}/>
      <TitleText title='Description'/>
      <TextArea placeholder='Add description...' text={currentTask?.description?.length} maxLength={50}  
        onChange={handleInputDescription}/>
      <TitleText title='Date'/>
      <InputDate onChange={handleInputData}/>
      <div className='flex-row justify-content-between align-center'>
        <Button title='Cancel' style={{backgroundColor: '#E2EBFA',  color: '#0C61F6' }} onClick={handleCancelButton}/>
        <Button title={title} style={{backgroundColor: '#0C61F6',  color: '#E2EBFA'}} onClick={onClick}/>
      </div>
    </form>
  )
}

export default FormTask;