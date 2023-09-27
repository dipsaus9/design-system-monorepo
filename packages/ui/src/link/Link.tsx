import { cx } from "class-variance-authority";

import { forwardRef } from "../helpers/forwardRef";

const defaultAs = "a" as const;

export interface LinkProps {}

export const Link = forwardRef<LinkProps, typeof defaultAs>(
  ({ children, as, className, ...props }, ref) => {
    const Component = as ?? defaultAs;

    return (
      <Component
        ref={ref}
        className={cx(
          "text-current no-underline hover:text-current hover:underline",
          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
);
