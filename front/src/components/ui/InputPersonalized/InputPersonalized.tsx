import React, { FC, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  error?: string;
  dirty?: boolean;
  isValid?: boolean;
}

const InputPersonalized: FC<InputProps> = ({
  name,
  label,
  error,
  dirty = false,
  isValid = false,
  className,
  ...otherProps
}) => {
  const baseClasses =
    "border-2 rounded px-3 py-2 text-base focus:border-blue-500 focus:outline-none w-full font-primary";

  let stateClasses = "";
  if (dirty) {
    if (error) {
      stateClasses = "border-red-500 bg-red-50";
    } else if (isValid) {
      stateClasses = "border-green-500 bg-green-50";
    }
  }
  if (!stateClasses) {
    stateClasses = "border-blue-500"; // Estado por defecto
  }

  const inputClassName = `${baseClasses} ${stateClasses} ${className || ""}`;

  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="mb-1 font-secondary">
        {label}
      </label>
      <input id={name} name={name} {...otherProps} className={inputClassName} />
      {dirty && error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
};

export default InputPersonalized;
