/* eslint-disable no-restricted-syntax */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function omitProps<T extends Record<any, any>, K extends keyof T>(
  object: T,
  keysToOmit: K[] = []
) {
  const clone = { ...object };

  for (const key of keysToOmit) {
    if (key in clone) delete clone[key];
  }

  return clone as Omit<T, K>;
}
