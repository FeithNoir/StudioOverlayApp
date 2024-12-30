export interface InputField {
  label: string;
  type: string;
  placeholder?: string;
  min?: number;
  max?: number;
  step?: number;
  value: string | number;
}
