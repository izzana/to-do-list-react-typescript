interface ITextArea {
  name?: string;
  id?: string | undefined;
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  maxLength?: number;
  text?: number;
}

export type {ITextArea};