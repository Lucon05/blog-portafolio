import type { ReactNode } from "react";
import React from "react";

import { cn } from "~/lib/cn";

type ButtonProps = {
  className?: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "danger";
  disabled?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

function Button({
  children,
  className,
  variant,
  disabled,
  ...buttonProps
}: ButtonProps) {
  return (
    <button
      className={cn(
        "cursor-pointer rounded-sm bg-blue-500 px-2 py-1 text-white",
        {
          "bg-red-500": variant === "danger",
          "bg-blue-500": variant === "primary",
          "bg-green-500": variant === "secondary",
          "cursor-not-allowed opacity-50": disabled,
        },
        className,
      )}
      {...buttonProps}
    >
      {children}
    </button>
  );
}

export default Button;
