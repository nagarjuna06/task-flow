import * as React from "react";

import { cn } from "@/lib/utils";
import { LucideEye, LucideEyeOff } from "lucide-react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  message?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, message, ...props }, ref) => {
    const [Type, setType] = React.useState(type);
    const handleType = () => {
      if (Type == "password") setType("text");
      else setType("password");
    };
    return (
      <div className={`flex flex-col gap-1   ${error ? "text-red-500" : ""}`}>
        <div className="relative flex flex-col">
          <div className="flex items-center gap-2 relative">
            <input
              type={Type}
              className={cn(
                "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                className,
                {
                  "pr-9": type == "password",
                }
              )}
              ref={ref}
              {...props}
            />
          </div>

          {type == "password" && (
            <span
              className="w-4 text-slate-600 absolute top-2.5 right-5 cursor-pointer"
              onClick={handleType}
            >
              {Type == "password" ? (
                <LucideEyeOff size={22} />
              ) : (
                <LucideEye size={22} />
              )}
            </span>
          )}
        </div>
        {error && <p className="text-sm font-medium">{message}</p>}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
