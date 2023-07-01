import React, {FC, useState} from "react";
import LabelNavBar from "../../atoms/labelNavBar/LabelNavBar";
import '../../../index.css';
import './NavBar';

const NavBar: FC<any> = (params: any) => {
  const [all, setAll] = useState<number>(0);
  const [open, setOpen] = useState<number>(0);
  const [closed, setClosed] = useState<number>(0);
  const [archived, setArchived] = useState<number>(0);

  const data = [
      {name: "All", number: all},
      {name: "Open", number: open},
      {name: "Closed", number: closed},
      {name: "Archived", number: archived}
    ]
  
  return (
    <div className="flex-row align-center justify-content-between padding text-size">
      {data.map((value: any) => (
        <LabelNavBar label={value.name} total={value.number}/>
      ))}
    </div>
  )
}

export default NavBar;