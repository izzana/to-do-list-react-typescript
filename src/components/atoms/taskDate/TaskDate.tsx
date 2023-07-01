import React, {FC} from "react";
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import './TaskDate.css';

const TaskDate: FC<any> = (params: any) => {

    const dateFormatter = () => {
        const currentDate = new Date();
        const formattedDate = format(currentDate, 'eeee, dd MMMM', { locale: ptBR });
        return formattedDate
      };

  return (
    <div >
      <p className="border"></p>
      <p className="task-date">{dateFormatter()}</p>
    </div>
  )
}

export default TaskDate;