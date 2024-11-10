import { jsx } from "@builder.io/qwik/jsx-runtime";
import { createContextId, component$, useStore, useContextProvider, Slot } from "@builder.io/qwik";
const userContext = createContextId("user");
const DataStore = component$(() => {
  const userData = useStore({
    username: "Ayes",
    status: "busy"
  });
  useContextProvider(userContext, userData);
  return /* @__PURE__ */ jsx(Slot, {});
});
export {
  DataStore,
  userContext
};
