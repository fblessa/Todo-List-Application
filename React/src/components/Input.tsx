import { InputHTMLAttributes } from 'react';

type InputProps = {
  label?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export default function Input({ label, ...rest }: InputProps) {
  return (
    <div>
      {label && <label>{label}</label>}
      <input
        {...rest}
      />
    </div>
  );
}
