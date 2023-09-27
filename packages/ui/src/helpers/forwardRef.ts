/**
 * All credit goes to Chance (Reach UI), Haz (Reakit) and (fluentui), Chakra UI
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/core/system/src/system.types.tsx
 */
import {
  forwardRef as forwardReactRef,
  type ForwardRefRenderFunction,
} from "react";

import type {
  As,
  ComponentWithAs,
  PropsOf,
  RightJoinProps,
} from "./system.types";

export function forwardRef<Props extends object, Component extends As>(
  component: ForwardRefRenderFunction<
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    any,
    RightJoinProps<PropsOf<Component>, Props> & {
      as?: As;
    }
  >
) {
  return forwardReactRef(component) as unknown as ComponentWithAs<
    Component,
    Props
  >;
}
