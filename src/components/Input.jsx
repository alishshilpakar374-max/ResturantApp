import React, { useId } from "react";

function Input(
  { label, type = "text", className = "", placeholder = "", ...props },
  ref,
) {
  const id = useId();

  return (
    <div className="w-full">
      {label && (
        <div className="mb-1.5">
          <label htmlFor={id} className="text-sm font-medium text-(--text)">
            {label}
          </label>
        </div>
      )}

      <input
        type={type}
        className={`w-full rounded-lg px-3 py-2 outline-none transition ${className}`}
        ref={ref}
        {...props}
        id={id}
        placeholder={placeholder}
      />
    </div>
  );
}

export default React.forwardRef(Input);
