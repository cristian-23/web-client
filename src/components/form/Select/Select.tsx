import React, { useState } from "react";
import styles from "./Select.module.css";
import { FaChevronDown } from "react-icons/fa"; // o el icono que prefieras

interface SelectProps {
  label?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  className?: string;
  name?: string;
  id?: string;
  required?: boolean;
  disabled?: boolean;
  options: { value: string; label: string }[];
}

const Select = ({
  label,
  value = "",
  onChange,
  className = "",
  name,
  id,
  required,
  disabled,
  options,
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`${styles.selectWrapper} ${className}`}>
      <select
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        required={required}
        disabled={disabled}
        className={styles.select}
        onFocus={() => setIsOpen(true)}
        onBlur={() => setIsOpen(false)}>
        <option value="" disabled hidden></option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>

      <label htmlFor={id} className={styles.label}>
        {label}
      </label>

      {/* Flecha */}
      <FaChevronDown
        className={`${styles.arrow} ${isOpen ? styles.rotate : ""}`}
      />
    </div>
  );
};

export default Select;
