import { cn } from "~/lib/cn";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}
export function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-md border border-gray-200 bg-white p-4",
        className,
      )}
    >
      {children}
    </div>
  );
}
