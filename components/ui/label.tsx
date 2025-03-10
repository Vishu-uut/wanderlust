"use client";

import * as React from "react";
import { Root } from "@radix-ui/react-label";
import { cn } from "@/lib/utils";

const Label = React.forwardRef(({ className, ...props }, ref) => (
  <Root ref={ref} className={cn("text-sm font-medium peer-disabled:opacity-70", className)} {...props} />
));
Label.displayName = "Label";

export { Label };
