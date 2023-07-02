interface ICheckbox {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isChecked: boolean;
}

export type {ICheckbox};