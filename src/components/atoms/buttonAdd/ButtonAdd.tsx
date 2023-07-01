import React, {FC} from "react";
import IButtonAdd from "../../../types/components/atoms/buttonAdd";
import './ButtonAdd.css';

const ButtonAdd: FC<IButtonAdd> = (params: IButtonAdd) => {
  const onClick = params.onClick;
  const title = params.title;
  return (
    <button className="button-add" onClick={onClick}>{`+ ${title}`}</button>
  )
}

export default ButtonAdd;