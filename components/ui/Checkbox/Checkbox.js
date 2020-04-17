import React from "react";
import "./Checkbox.css";

export default function Checkbox({ name, value, label, checked, onChange }) {
  return (
    <div className="checkbox-button">
      <input
        type="checkbox"
        value={value}
        name={name}
        id={`${name}-${value}`}
        onChange={onChange}
        checked={checked}
      />
      <label htmlFor={`${name}-${value}`}>{label}</label>
    </div>
  );
}
