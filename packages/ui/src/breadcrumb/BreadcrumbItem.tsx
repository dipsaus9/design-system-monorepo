import { cx } from "class-variance-authority";

import { forwardRef } from "../helpers/forwardRef";
import { getValidChildren } from "../helpers/getValidChildren";

import { cloneElement } from "react";

export interface BreadcrumbItemProps {}

const defaultAs = "li" as const;

/**
 * Breadcrumb item, should be used within a Breadcrumb list
 */
export const BreadcrumbItem = forwardRef<BreadcrumbItemProps, typeof defaultAs>(
  ({ children, className, as, ...props }, ref) => {
    const Component = as ?? defaultAs;

    const validChildren = getValidChildren(children);

    const clones = validChildren.map((child) => {
      const nestedChildren = getValidChildren(child?.props?.children);

      return cloneElement(child, {
        children: nestedChildren.map((nestedChild) => {
          return cloneElement(nestedChild, {
            className: cx("flex items-center", nestedChild?.props?.className),
          });
        }),
        className: child?.props.className,
      });
    });

    return (
      <Component
        ref={ref}
        className={cx(
          "relative m-0 py-0",
          "font-breadcrumb-default text-breadcrumb-default text-text-breadcrumb-default",
          "last-of-type:text-text-breadcrumb-active",
          "hover:text-breadcrumb-hover",
          "focus:text-breadcrumb-focus",
          className
        )}
        {...props}
      >
        {clones}
      </Component>
    );
  }
);
