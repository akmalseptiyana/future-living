import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/utils/classnames";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 md:font-semibold",
  {
    variants: {
      variant: {
        default: "bg-title text-white",
        secondary: "bg-white text-title shadow-md md:rounded-lg",
        outline: "border border-title bg-white text-title",
        ghost: "hover:bg-title hover:text-white",
      },
      size: {
        default: "px-4 py-2 text-sm md:px-6 md:text-base lg:px-8",
        sm: "px-5 py-2 text-sm",
        lg: "px-4 py-2 leading-7 md:px-6 md:text-2xl md:leading-8 lg:px-8 lg:py-4",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
