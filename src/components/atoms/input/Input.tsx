import { FC } from "react";

import {IInput} from "../../../types/components/atoms/input";

import '../../../index.css';
import './Input.css';

const Input: FC<IInput> = (params: IInput) => {
  const placeholder = params.placeholder;
  const onChange = params.onChange;

  return (
    <input className="input-container border-radius" type="text" name="" id="" placeholder={placeholder} onChange={onChange} maxLength={30} required/>
  )
}

export default Input;