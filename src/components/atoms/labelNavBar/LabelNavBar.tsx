import {FC} from "react";

import {ILabelNavBar} from "../../../types/components/atoms/labelNavBar";

import '../../../index.css';
import './LabelNavBar.css'

const LabelNavBar: FC<ILabelNavBar> = (params: ILabelNavBar) => {

  const label = params.label;
  const total = params.total;
  const onClick = params.onClick;

  return (
    <button type="button" onClick={onClick} className="flex-row justify-content-between border-radius button-nav">
      <p className="title">{label}</p>
      <p className="total-number title border-radius">{total}</p>
    </button>
  )
}

export default LabelNavBar;