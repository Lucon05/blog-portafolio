import React from "react";

import { cn } from "~/lib/cn";

type InputProps = {
  className?: string;
  error?: string;
  label?: string;
  disabled?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

function Input({ className, label, error, ...inputProps }: InputProps) {
  return (
    <label>
      {" "}
      {label}
      <br />
      <input
        className={cn(
          {},
          "rounded-md border p-2",
          error ? "border-red-500" : "border-gray-300",
          className,
        )}
        {...inputProps}
      />
      <br />
      <span className="text-red-500">{error}</span>
    </label>
  );
}

export default Input;
