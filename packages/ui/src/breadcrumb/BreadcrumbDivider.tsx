import { cx } from "class-variance-authority";

import {
  ChevronRight,
  type ChevronRightIconProps,
} from "../icons/ChevronRight";

export interface BreadcrumbDividerProps
  extends Omit<ChevronRightIconProps, "ref"> {}

/**
 * Breadcrumb divider Icon
 */
export function BreadcrumbDivider({
  className,
  ...props
}: BreadcrumbDividerProps) {
  return (
    <ChevronRight
      className={cx("text-icon-breadcrumb", className)}
      {...props}
    />
  );
}
