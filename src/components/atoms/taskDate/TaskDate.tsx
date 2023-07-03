import React, {FC} from "react";
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import './TaskDate.css';

const TaskDate: FC<any> = (params: any) => {

  const date = params.date;

  const dateFormatter = (date: any) => {
    if (date instanceof Date ) {
      const formattedDate = format(date, 'eeee, dd MMMM', { locale: ptBR });
      return formattedDate;
    } 
  };
  
  return (
    <div >
      <p className="task-date">{dateFormatter(date)}</p>
    </div>
  )
}

export default TaskDate;