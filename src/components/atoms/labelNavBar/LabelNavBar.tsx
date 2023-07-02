import React, {FC} from "react";
import {ILabelNavBar} from "../../../types/components/atoms/labelNavBar";
import '../../../index.css';
import './LabelNavBar.css'

const LabelNavBar: FC<ILabelNavBar> = (params: ILabelNavBar) => {

  const label = params.label;
  const total = params.total;
  return (
    <div className="flex-row justify-content-between ">
      <p className="title">{label}</p>
      <p className="total-number title border-radius">{total}</p>
    </div>
  )
}

export default LabelNavBar;