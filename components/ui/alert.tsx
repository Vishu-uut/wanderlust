import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const alertVariants = cva(
  "relative w-full rounded-lg border p-4 flex items-start gap-3",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        destructive: "border-destructive/50 text-destructive dark:border-destructive",
      },
    },
    defaultVariants: { variant: "default" },
  }
);

interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  variant?: "default" | "destructive";
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(({ className, variant, ...props }, ref) => (
  <div ref={ref} role="alert" className={cn(alertVariants({ variant }), className)} {...props} />
));
Alert.displayName = "Alert";

interface AlertTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  className?: string;
}

const AlertTitle = React.forwardRef<HTMLHeadingElement, AlertTitleProps>(({ className, ...props }, ref) => (
  <h5 ref={ref} className={cn("mb-1 font-medium", className)} {...props} />
));
AlertTitle.displayName = "AlertTitle";

interface AlertDescriptionProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const AlertDescription = React.forwardRef<HTMLDivElement, AlertDescriptionProps>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("text-sm", className)} {...props} />
));
AlertDescription.displayName = "AlertDescription";

export { Alert, AlertTitle, AlertDescription };
