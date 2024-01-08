import {FC} from "react";

import {IInput} from "../../../types/components/atoms/input";
import '../../../index.css';
import './InputDate.css';

const InputDate: FC<IInput> = (params: IInput) => {
  const onChange = params.onChange;
  const date = params.date;

  return (
    <input className="input-container border-radius" value={date} type="date" onChange={onChange}/>
  )
}

export default InputDate;