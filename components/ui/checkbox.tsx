"use client";

import * as React from "react";
import { Root, Indicator } from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const Checkbox = React.forwardRef(({ className, ...props }, ref) => (
  <Root
    ref={ref}
    className={cn(
      "peer h-4 w-4 rounded-sm border border-primary ring-offset-background focus-visible:ring-2 disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      className
    )}
    {...props}
  >
    <Indicator className="flex items-center justify-center text-current">
      <Check className="h-4 w-4" />
    </Indicator>
  </Root>
));
Checkbox.displayName = "Checkbox";

export { Checkbox };