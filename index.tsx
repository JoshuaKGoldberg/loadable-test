import loadable from "@loadable/component";
import React from "react";

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
