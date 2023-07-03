import { FC } from 'react';

import Header from '../../atoms/header/Header';
import FormTask from '../formTask/FormTask';
import TitleText from '../../atoms/titleText/TitleText';

import '../../../index.css';
import './Form.css';

const Form: FC<any> = (params: any) => {
  const buttonTitle = params.buttonTitle;
  const onClick = params.onClick;

  return (
    <div className='justify-content-between align-center form-container border-radius'>
      <Header title='New Task ToDo'/>
      <div className='flex-column justify-content-between'>
        <TitleText title='Title Task'/>
        <FormTask title={buttonTitle} onClick={onClick}/>
      </div>
    </div>
  )
}

export default Form;