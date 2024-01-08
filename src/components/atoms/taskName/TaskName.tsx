import { FC } from "react";
import { ITaskName } from "../../../types/components/atoms/taskName";
import { useFormsTask } from "../../../hooks/Task";

import Checkbox from "../checkBox/CheckBox";

import '../../../index.css';
import './TaskName.css';

const TaskName: FC<ITaskName> = (params: ITaskName) => {
  const {
    tasks,
    setTasks,
  } = useFormsTask();

  const handleCheckBox = (id: number) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          isClosed: !task.isClosed,
        };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <div className="flex-row justify-content-between align-center task-container">
      <div className="flex-column justify-content-between">
        <h2 className={params.task.isClosed ? "strike" : ""}>{params.task.name}</h2>
        <p className="task-bottom">{params.task.description}</p>
      </div>
      <Checkbox
        isChecked={params.task.isClosed}
        onChange={() => handleCheckBox(params.task.id)}
      />
    </div>
  );
};

export default TaskName;
