import { FC } from "react";

import { useFormsTask } from "../../../hooks/Task";

import LabelNavBar from "../../atoms/labelNavBar/LabelNavBar";

import "../../../index.css";
import "./NavBar";

const NavBar: FC<any> = (params: any) => {

  const {
    tasks,
    setFilteredTasks,
  } = useFormsTask();

  const all = tasks;
  const open = tasks.filter(task => !task.isClosed);
  const closed = tasks.filter(task => task.isClosed);

  const handleAllClick = () => {
    setFilteredTasks(all)
  };

  const handleOpenClick = () => {
    setFilteredTasks(open)
  };

  const handleClosedClick = () => {
    setFilteredTasks(closed)
  };

  const data = [
    { name: "All", number: all.length, onClick: handleAllClick },
    { name: "Open", number: open.length, onClick: handleOpenClick },
    { name: "Closed", number: closed.length, onClick: handleClosedClick },
  ];


  return (
    <div className="flex-row align-center justify-content-between padding text-size">
      {data.map((value: any) => (
        <LabelNavBar
          key={value.name}
          onClick={value.onClick}
          label={value.name}
          total={value.number}
        />
      ))}
    </div>
  );
};

export default NavBar;
