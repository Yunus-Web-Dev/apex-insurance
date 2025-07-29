import { useState } from "react";
import "./Switch.css"; // Стили вынесены в отдельный файл

interface SwitchProps {
  rounded?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
}

export const Switch = ({
  rounded = false,
  defaultChecked = false,
  onChange,
}: SwitchProps) => {
  const [checked, setChecked] = useState(defaultChecked);

  const handleChange = () => {
    const newChecked = !checked;
    setChecked(newChecked);
    onChange?.(newChecked);
  };

  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={checked}
        onChange={handleChange}
      />
      <span className={`slider ${rounded ? "round" : ""}`}></span>
    </label>
  );
};