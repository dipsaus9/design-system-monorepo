type WithoutNullableKeys<Type> = {
  [Key in keyof Type]-?: NonNullable<Type[Key]>;
};

export type GetVariantProps<T, S extends keyof T> = Omit<T, S | "disabled"> &
  WithoutNullableKeys<Pick<T, S>>;
