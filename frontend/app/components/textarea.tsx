import { cn } from "~/lib/cn";

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  className?: string;
}
export function Textarea({ label, error, className, ...rest }: TextareaProps) {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label className="text-sm font-medium text-gray-700">{label}</label>
      )}
      <textarea
        className={cn(
          "rounded-md border p-2",
          error ? "border-red-500" : "border-gray-300",
          className,
        )}
        {...rest}
      />
      {error && <span className="text-sm text-red-500">{error}</span>}
    </div>
  );
}
