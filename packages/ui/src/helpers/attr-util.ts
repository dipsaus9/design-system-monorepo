import type { Args, Booleanish } from "../types/PropGetter";

export const ariaAttr = (condition: boolean | undefined) =>
  condition ? true : undefined;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function callAllHandlers<T extends (event: any) => void>(
  ...fns: (T | undefined)[]
) {
  return function func(event: Args<T>[0]) {
    fns.some((fn) => {
      fn?.(event);

      return event?.defaultPrevented;
    });
  };
}

export const dataAttr = (condition: boolean | undefined) =>
  (condition ? "" : undefined) as Booleanish;
