import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

const Base: Meta<typeof Button> = {
  title: "Atoms/Button",
  args: {
    children: "Button",
    disabled: false,
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
