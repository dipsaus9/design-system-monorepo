# Link

Link component used to render anchor tags. HTML element can be swapped with the `as` attribute.

## Usage

Render a `a` element with styling

```tsx
import { Link } from "@dipsaus9/ui/src/link";

<Link a="/">Your link here</Link>;
```

With react-router-dom

```tsx
import { Link } from "@dipsaus9/ui/src/link";
import { Link as ReactRouterLink } from "react-router-dom";

<Link to="/" as={ReactRouterLink}>
  Your link here
</Link>;
```
