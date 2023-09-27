# Breadcrumbs

Breadcrumbs molecule.

## Usage

Render breadcrumbs with anchor tag

```tsx
import { BreadcrumbList, BreadcrumbItem } from "@dipsaus9/ui/src/breadcrumb";

<BreadcrumbList>
  <BreadcrumbItem>
    <Link a="/">First</Link>
  </BreadcrumbItem>
  <BreadcrumbItem>
    <Link a="/">Second</Link>
  </BreadcrumbItem>
  <BreadcrumbItem>Last</BreadcrumbItem>
</BreadcrumbList>;
```

Render breadcrumbs with Link from `react-router-dom`

```tsx
import { Link } from "react-router-dom";
import { BreadcrumbList, BreadcrumbItem } from "@dipsaus9/ui/src/";

<BreadcrumbList>
  <BreadcrumbItem>
    <Link to="/">First</Link>
  </BreadcrumbItem>
  <BreadcrumbItem>
    <Link to="/">Second</Link>
  </BreadcrumbItem>
  <BreadcrumbItem>Last</BreadcrumbItem>
</BreadcrumbList>;
```
