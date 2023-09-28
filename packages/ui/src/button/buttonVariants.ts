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
          "bg-background-button-primary-default hover:bg-background-button-primary-hover focus:bg-background-button-primary-focus disabled:bg-background-button-primary-disabled",
          "text-button-primary-default hover:text-button-primary-hover focus:text-button-primary-focus disabled:text-button-primary-disabled",
          "font-button-primary-default",
          "text-text-button-primary",
          "shadow-button-primary-default hover:shadow-button-primary-hover focus:shadow-button-primary-focus disabled:shadow-button-primary-disabled",
          "border-border-button-primary-default hover:border-border-button-primary-hover focus:border-border-button-primary-focus disabled:border-border-button-primary-disabled",
        ],
        secondary: [
          "bg-background-button-secondary-default hover:bg-background-button-secondary-hover focus:bg-background-button-secondary-focus disabled:bg-background-button-secondary-disabled",
          "text-button-secondary-default hover:text-button-secondary-hover focus:text-button-secondary-focus disabled:text-button-secondary-disabled",
          "font-button-secondary-default",
          "text-text-button-secondary",
          "shadow-button-secondary-default hover:shadow-button-secondary-hover focus:shadow-button-secondary-focus disabled:shadow-button-secondary-disabled",
          "border-border-button-secondary-default hover:border-border-button-secondary-hover focus:border-border-button-secondary-focus disabled:border-border-button-secondary-disabled",
        ],
      },
    },
  }
);

export type ButtonVariants = VariantProps<typeof buttonVariants>;
export type ButtonVariantProps = GetVariantProps<ButtonVariants, "intent">;
