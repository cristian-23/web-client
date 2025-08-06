import React from "react";
import styles from "./Input.module.css";

interface PropsType {
  placeholder?: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  type?: string;
  name?: string;
  id?: string;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  label?: string;
  disabled?: boolean;
}
const Input = ({
  placeholder,
  value = "",
  onChange,
  className,
  type,
  name,
  id,
  required,
  minLength,
  maxLength,
  label,
  disabled,
}: PropsType) => {
  return (
    <div className={styles.input}>
      <input
        type={type}
        name={name}
        id={id}
        placeholder=" "
        value={value}
        onChange={onChange}
        className={className}
        required={required}
        minLength={minLength}
        maxLength={maxLength}
        disabled={disabled}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default Input;
