import React from "react";

function InputForm({
  handleChange,
  error,
  value,
  name,
  placeholder,
  type = "text",
}) {

  console.log(error)

  return (
    <div>
      <input
        onChange={handleChange}
        value={value}
        name={name}
        className={`bg-slate-200 px-2 py-1 rounded-sm ${error? "outline-red-500":"outline-0"} placeholder:text-sm w-full`}
        type={type}
        placeholder={placeholder}
      />
      {error && <p className="text-red-500 text-xs">{error}</p>}
    </div>
  );
}
export default InputForm;
