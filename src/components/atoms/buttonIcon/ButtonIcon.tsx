import {FC} from "react";
import {IButtonIcon} from "../../../types/components/atoms/buttonIcon";

import './ButtonIcon.css';

const ButtonIcon: FC<IButtonIcon> = (params: IButtonIcon) => {
  const onClick = params.onClick;
  const icon  = params.icon;
  const id = params.id;
  return (
    <button data-testid={`delete-button-${id}`} id={id} className="flex-row align-center button-icon border-radius" onClick={onClick}>
      <img src={icon} alt="Icon"/>
    </button>
  )
}

export default ButtonIcon;