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
        {
          "bg-red": variant === "danger",
          "bg-blue": variant === "primary",
          "bg-green": variant === "secondary",
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
