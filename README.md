# Loadable Test

Showing that `ref`s are not allowed in TypeScript with loadable components.

```tsx
const MyAsyncLoadable = loadable(() => import('./async'))

export const MyComponent = () => {
  return (
    <MyAsyncLoadable
      ref={(ref) => {
        ref!.publicMethod();
      }}
    />
  );
};
```

```text
Type '{ ref: (ref: any) => void; }' is not assignable to type 'IntrinsicAttributes & { fallback?: Element | undefined; } & { children?: ReactNode; }'.
  Property 'ref' does not exist on type 'IntrinsicAttributes & { fallback?: Element | undefined; } & { children?: ReactNode; }'.
```
