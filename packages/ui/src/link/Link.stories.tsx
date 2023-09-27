import type { Meta, StoryObj } from "@storybook/react";

import { Link } from "./Link";

const Base: Meta<typeof Link> = {
  title: "Atoms/Link",
  args: {
    children: "Link",
    href: "#",
  },
  render: (props) => <Link {...props} />,
};

export default Base;

export const Default: StoryObj = {};
