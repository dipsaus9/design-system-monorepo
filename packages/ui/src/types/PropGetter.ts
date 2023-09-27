/* eslint-disable @typescript-eslint/no-explicit-any */
import type {
  DOMAttributes as ReactDOMAttributes,
  Ref,
  RefAttributes,
  AriaAttributes,
} from "react";

export interface DOMElement extends Element, HTMLOrSVGElement {}

export type DataAttributes = {
  [dataAttr: string]: any;
};

export type DOMAttributes<T = DOMElement> = AriaAttributes &
  ReactDOMAttributes<T> &
  DataAttributes & {
    id?: string;
    role?: React.AriaRole;
    tabIndex?: number;
    style?: React.CSSProperties;
  };

export type Merge<M, N> = N extends Record<string, unknown>
  ? M
  : Omit<M, keyof N> & N;

export type PropGetter<P = Record<string, unknown>, R = DOMAttributes> = (
  props?: Merge<DOMAttributes, P>,
  ref?: Ref<any>
) => R & RefAttributes<any>;

export type Booleanish = boolean | "true" | "false";

// eslint-disable-next-line @typescript-eslint/ban-types
export type Args<T extends Function> = T extends (...args: infer R) => any
  ? R
  : never;
