import React from "react";

const TextInput = ({
  type = "text",
  value,
  setValue,
  icon,
  placeholder,
  name,
  required = true,
  style = "input",
  autoComplete = "on", // Add the autoComplete prop with a default value
}) => {
  return (
    <div className={`rounded-3 bg-white px-4 ${style}`}>
      {icon}
      <input
        type={type}
        value={value}
        autoComplete={autoComplete} // Use the autoComplete prop here
        name={name}
        onChange={setValue}
        className="w-100 h-100 bg-transparent border-none px-3"
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};

export default TextInput;
