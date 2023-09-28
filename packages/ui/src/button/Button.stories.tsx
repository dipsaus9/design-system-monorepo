import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

const Base: Meta<typeof Button> = {
  title: "Atoms/Button",
  args: {
    children: "Button",
    disabled: false,
    intent: "primary",
  },
  argTypes: {
    intent: {
      control: "select",
      options: ["primary", "secondary", "tertiary"],
    },
    disabled: {
      control: "boolean",
    },
  },
  render: (props) => <Button {...props} />,
};

export default Base;

export const Default: StoryObj = {};

export const primary: StoryObj = {
  args: {
    intent: "primary",
  },
};

export const secondary: StoryObj = {
  args: {
    intent: "secondary",
  },
};

export const tertiary: StoryObj = {
  args: {
    intent: "tertiary",
  },
};

export const disabled: StoryObj = {
  args: {
    disabled: true,
  },
};
