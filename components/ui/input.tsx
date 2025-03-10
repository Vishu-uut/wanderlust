import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef(({ className, type, ...props }, ref) => (
  <input
    ref={ref}
    type={type}
    className={cn(
      "h-10 w-full rounded-md border px-3 py-2 text-base placeholder:text-muted-foreground focus:ring-2 disabled:opacity-50 md:text-sm",
      className
    )}
    {...props}
  />
));
Input.displayName = "Input";

export { Input };
