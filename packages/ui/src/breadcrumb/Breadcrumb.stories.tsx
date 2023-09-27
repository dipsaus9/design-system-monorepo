import type { Meta, StoryObj } from "@storybook/react";

import { BreadcrumbItem } from "./BreadcrumbItem";
import { BreadcrumbList } from "./BreadcrumbList";
import { Link } from "../link";

const Base: Meta<typeof BreadcrumbItem> = {
  title: "Molecules/Breadcrumbs",
  render: () => (
    <BreadcrumbList>
      <BreadcrumbItem>
        <Link href="/">First</Link>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <Link href="/">Second</Link>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <span>Last</span>
      </BreadcrumbItem>
    </BreadcrumbList>
  ),
};

export default Base;

export const Default: StoryObj = {};
