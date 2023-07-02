import React, {FC, useState} from "react";

import Header from "../../atoms/header/Header";
import {IText} from "../../../types/components/atoms/textTitle";

import '../../../index.css';
import './TitleText.css';

const TitleText: FC<IText> = (params: IText) => {
  const title = params.title;

  return (
    <div className="flex-row">
      <h2>{title}</h2>
    </div>
  )
}

export default TitleText;