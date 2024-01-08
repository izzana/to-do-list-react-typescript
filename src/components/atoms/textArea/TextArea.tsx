import { FC } from "react";

import {ITextArea} from "../../../types/components/atoms/textArea";

import './TextArea.css'
import '../../../index.css';

const TextArea: FC<ITextArea> = (params: ITextArea) => {
  const text = params.text


	return(
		<>
			<textarea className="text-area-container border-radius" name={params.name} id={params.id} rows={2} cols={50} maxLength={50} placeholder={params.placeholder} onChange={params.onChange}/>
			<p>
				<span>{`Caracteres utilizados: ${text || 0}`}</span>
				<span>/{params.maxLength}</span>
			</p>
		</>
	)
}

export default TextArea;