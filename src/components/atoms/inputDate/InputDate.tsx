import React, {FC} from "react";

import {IInput} from "../../../types/components/atoms/input";
import '../../../index.css';
import './InputDate.css';

const InputDate: FC<IInput> = (params: IInput) => {
  const onChange = params.onChange;

  return (
    <>
      <input className="input-container border-radius" type="date" name="" id="" onChange={onChange}/>
    </>
  )
}

export default InputDate;