import React, {FC} from "react";
import {IHeader} from "../../../types/components/atoms/header";
import './Header.css'

const Header: FC<IHeader> = (params: IHeader) => {
  return (
    <div className="header">
      <h1 className="header-title">{params.title}</h1>
    </div>
  )
}

export default Header;