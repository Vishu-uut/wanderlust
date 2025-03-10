import * as React from "react";
import { cn } from "@/lib/utils";

const Card = ({ className, children, ...props }) => (
  <div className={cn("rounded-lg border bg-card shadow-sm", className)} {...props}>
    {children}
  </div>
);

const CardSection = ({ className, children, ...props }) => (
  <div className={cn("p-6", className)} {...props}>
    {children}
  </div>
);

const CardTitle = ({ className, children, ...props }) => (
  <h2 className={cn("text-2xl font-semibold", className)} {...props}>
    {children}
  </h2>
);

const CardDescription = ({ className, children, ...props }) => (
  <p className={cn("text-sm text-muted-foreground", className)} {...props}>
    {children}
  </p>
);

export { Card, CardSection as CardHeader, CardSection as CardContent, CardSection as CardFooter, CardTitle, CardDescription };
