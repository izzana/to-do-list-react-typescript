import React, {FC} from "react";
import ButtonAdd from "../../atoms/buttonAdd/ButtonAdd";
import TaskHeaderDate from "../../atoms/taskHeaderDate/TaskHeaderDate";
import '../../../index.css';
import './SubHeader.css';

const SubHeader: FC<any> = (params: any) => {
  return (
    <div className="flex-row align-center justify-content-between padding">
      <TaskHeaderDate title="Today's Task"/>
      <ButtonAdd onClick={() => console.log("new task")} title="New Task"/>
    </div>
  )
}

export default SubHeader;