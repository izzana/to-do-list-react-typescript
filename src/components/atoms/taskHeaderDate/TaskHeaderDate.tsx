import {FC} from "react";

import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import {IHeader} from "../../../types/components/atoms/header";

import './TaskHeaderDate.css';

const TaskHeaderDate: FC<IHeader> = (params: IHeader) => {

    const dateFormatter = () => {
      const currentDate = new Date();
      const formattedDate = format(currentDate, 'eeee, dd MMMM', { locale: ptBR });
      return formattedDate
    };

  return (
    <div >
      <h2>{params.title}</h2>
      <p className="date">{dateFormatter()}</p>
    </div>
  )
}

export default TaskHeaderDate;