import type { Meta, StoryObj } from "@storybook/react";

import { Card } from "./Card";

const meta: Meta<typeof Card> = {
  component: Card,
  args: {
    children: "Card content",
    title: "Card title",
    href: "",
  },
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {};
