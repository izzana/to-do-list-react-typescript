import React, {FC} from "react";
import ICheckbox from "../../../types/components/atoms/checkbox";
import { FaCheck } from 'react-icons/fa';
import '../../../index.css';
import './Checkbox.css'


const Checkbox: FC<ICheckbox> = (params: ICheckbox) => {
  const onChange = params.onChange;
  const isChecked = params.isChecked;

  return (
    <label className="input">
      <input className="checkbox" onChange={onChange} type="checkbox"  checked={isChecked}/>
      <span className="checkmark"></span>
    </label>
  )
}

export default Checkbox;