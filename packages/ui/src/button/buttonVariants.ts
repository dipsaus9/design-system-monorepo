import { VariantProps, cva } from "class-variance-authority";
import { GetVariantProps } from "src/types/GetVariantProps";

export const buttonVariants = cva(
  [
    "h-auto cursor-pointer rounded-button px-button-x py-button-y transition disabled:cursor-auto",
  ],
  {
    variants: {
      intent: {
        primary: [
          "bg-colors-background-button-primary-default hover:bg-colors-background-button-primary-hover focus:bg-colors-background-button-primary-focus disabled:bg-colors-background-button-primary-disabled",
          "text-typography-button-primary-default hover:text-typography-button-primary-hover focus:text-typography-button-primary-focus disabled:text-typography-button-primary-disabled",
          "font-typography-button-primary-default",
          "text-colors-text-button-primary",
          "shadow-button-primary-default hover:shadow-button-primary-hover focus:shadow-button-primary-focus disabled:shadow-button-primary-disabled",
          "border-colors-border-button-primary-default hover:border-colors-border-button-primary-hover focus:border-colors-border-button-primary-focus disabled:border-colors-border-button-primary-disabled",
        ],
        secondary: [
          "bg-colors-background-button-secondary-default hover:bg-colors-background-button-secondary-hover focus:bg-colors-background-button-secondary-focus disabled:bg-colors-background-button-secondary-disabled",
          "text-typography-button-secondary-default hover:text-typography-button-secondary-hover focus:text-typography-button-secondary-focus disabled:text-typography-button-secondary-disabled",
          "font-typography-button-secondary-default",
          "text-colors-text-button-secondary",
          "shadow-button-secondary-default hover:shadow-button-secondary-hover focus:shadow-button-secondary-focus disabled:shadow-button-secondary-disabled",
          "border-colors-border-button-secondary-default hover:border-colors-border-button-secondary-hover focus:border-colors-border-button-secondary-focus disabled:border-colors-border-button-secondary-disabled",
        ],
        tertiary: [
          "bg-colors-background-button-tertiary-default hover:bg-colors-background-button-tertiary-hover focus:bg-colors-background-button-tertiary-focus disabled:bg-colors-background-button-tertiary-disabled",
          "text-typography-button-tertiary-default hover:text-typography-button-tertiary-hover focus:text-typography-button-tertiary-focus disabled:text-typography-button-tertiary-disabled",
          "font-typography-button-tertiary-default",
          "text-colors-text-button-tertiary",
          "shadow-button-tertiary-default hover:shadow-button-tertiary-hover focus:shadow-button-tertiary-focus disabled:shadow-button-tertiary-disabled",
          "border-colors-border-button-tertiary-default hover:border-colors-border-button-tertiary-hover focus:border-colors-border-button-tertiary-focus disabled:border-colors-border-button-tertiary-disabled",
        ],
      },
    },
  }
);

export type ButtonVariants = VariantProps<typeof buttonVariants>;
export type ButtonVariantProps = GetVariantProps<ButtonVariants, "intent">;
