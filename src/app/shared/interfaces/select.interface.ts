export interface SelectField {
  label: string;
  value: string | number;
  options?: OptionField[];
}

export interface OptionField {
  label: string;
  value: string | number;
}
