export interface IOptionProps {
  option: string;
  onClick: (value: string) => void;
}

export interface IOption {
  id: string;
  min_size?: string;
  name?: string;
}
export interface ISelectProps {
  selected: IOption | null;
  options: string[];
  placeholder?: string;
  isFetching?: boolean;
  onChange?: (selected: string) => void;
  onClose?: () => void;
}
