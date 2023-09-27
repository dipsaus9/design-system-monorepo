import { forwardRef } from "react";
import { type SVGProps } from "react";

export interface ChevronRightIconProps extends SVGProps<SVGSVGElement> {}

export const ChevronRight = forwardRef<SVGSVGElement, ChevronRightIconProps>(
  (props, ref) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        focusable="false"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        ref={ref}
        {...props}
      >
        <polygon
          fill="currentcolor"
          points="7 5.8 13.1 12 7 18.2 8.4 19.6 15.9 12 8.4 4.4 7 5.8"
        />
      </svg>
    );
  }
);
