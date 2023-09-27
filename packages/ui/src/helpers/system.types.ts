/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import type {
  ComponentProps,
  ComponentPropsWithoutRef,
  ElementType,
  ValidationMap,
  WeakValidationMap,
} from "react";

export type As<Props = any> = ElementType<Props>;

/**
 * Extract the props of a React element or component
 */
export type PropsOf<T extends As> = ComponentPropsWithoutRef<T> & {
  as?: As;
};

export type OmitCommonProps<
  Target,
  OmitAdditionalProps extends keyof any = never,
> = Omit<Target, "transition" | "as" | "color" | OmitAdditionalProps>;

export type RightJoinProps<
  SourceProps extends object = {},
  OverrideProps extends object = {},
> = OmitCommonProps<SourceProps, keyof OverrideProps> & OverrideProps;

export type MergeWithAs<
  BaseComponentProps extends object,
  AsProps extends object,
  AdditionalProps extends object = {},
  AsComponent extends As = As,
> = RightJoinProps<BaseComponentProps, AdditionalProps> &
  RightJoinProps<AsProps, AdditionalProps> & {
    as?: AsComponent;
  };

export type ComponentWithAs<Component extends As, Props extends object = {}> = {
  <AsComponent extends As = Component>(
    props: MergeWithAs<
      ComponentProps<Component>,
      ComponentProps<AsComponent>,
      Props,
      AsComponent
    >
  ): JSX.Element;

  displayName?: string;
  propTypes?: WeakValidationMap<any>;
  contextTypes?: ValidationMap<any>;
  defaultProps?: Partial<any>;
  id?: string;
};
