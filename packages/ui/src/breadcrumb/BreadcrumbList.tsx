import { cloneElement } from "react";

import { cx } from "class-variance-authority";

import { forwardRef } from "../helpers/forwardRef";
import { getValidChildren } from "../helpers/getValidChildren";
import { omitProps } from "../helpers/omitProps";

import { BreadcrumbDivider } from "./BreadcrumbDivider";

export interface BreadcrumbListProps {}

const defaultAs = "ul" as const;

/**
 * Renders Breadcrumb items with a divider between each element
 */
export const BreadcrumbList = forwardRef<BreadcrumbListProps, typeof defaultAs>(
  (props, ref) => {
    const Component = props.as ?? defaultAs;
    const { className, ...ownProps } = omitProps(props, ["as"]);

    const validChildren = getValidChildren(ownProps.children);
    const totalItems = validChildren.length;

    const clones = validChildren.map((child, index) =>
      cloneElement(child, {
        children: (
          <>
            {child?.props?.children || null}
            {index < totalItems - 1 && <BreadcrumbDivider />}
          </>
        ),
        className: cx("flex", child?.props?.className),
      })
    );

    return (
      <Component
        ref={ref}
        className={cx(
          "m-0 flex list-none flex-wrap items-center p-0",
          className
        )}
        {...props}
      >
        {clones}
      </Component>
    );
  }
);
