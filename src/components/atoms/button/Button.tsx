import {FC} from "react";
import './Button.css'

const Button: FC<any> = (params: any) => {
  return (
    <button className="border-radius container-button" style={params.style} onClick={params.onClick} type="button">{params.title}</button>
  )
}

export default Button;