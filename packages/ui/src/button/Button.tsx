import { cx } from "class-variance-authority";

import { forwardRef } from "../helpers/forwardRef";
import { ButtonVariantProps, buttonVariants } from "./buttonVariants";

export interface ButtonProps extends ButtonVariantProps {}

const defaultAs = "button" as const;

export const Button = forwardRef<ButtonProps, typeof defaultAs>(
  ({ children, intent, className, as, ...props }, ref) => {
    const Component = as ?? defaultAs;

    return (
      <Component
        ref={ref}
        {...props}
        className={cx(buttonVariants({ intent }), className)}
      >
        {children}
      </Component>
    );
  }
);
