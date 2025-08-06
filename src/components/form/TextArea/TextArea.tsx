import React from "react";
import styles from "./TextArea.module.css";

interface TextAreaProps {
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  className?: string;
  name?: string;
  id?: string;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  label?: string;
  disabled?: boolean;
  rows?: number;
}

const TextArea = ({
  placeholder,
  value,
  onChange,
  className,
  name,
  id,
  required,
  minLength,
  maxLength,
  label,
  disabled,
  rows = 4,
}: TextAreaProps) => {
  return (
    <div className={styles.textareaWrapper}>
      <textarea
        id={id}
        name={name}
        placeholder=" "
        value={value}
        onChange={onChange}
        required={required}
        minLength={minLength}
        maxLength={maxLength}
        disabled={disabled}
        rows={rows}
        className={`${styles.textarea} ${className || ""}`}
      />
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
    </div>
  );
};

export default TextArea;
