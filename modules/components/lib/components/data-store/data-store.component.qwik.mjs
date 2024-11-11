import { jsx } from "@builder.io/qwik/jsx-runtime";
import { createContextId, component$, useStore, $, useContextProvider, Slot } from "@builder.io/qwik";
const userContext = createContextId("user");
const DataStore = component$(() => {
  const userData = useStore({
    account: void 0,
    profile: void 0,
    setUserData: $(function(payload) {
      if (!payload) {
        console.error("No payload provided");
        return;
      }
      this.account = payload.account;
      this.profile = payload.profile;
      console.log(this);
    })
  });
  useContextProvider(userContext, userData);
  return /* @__PURE__ */ jsx(Slot, {});
});
export {
  DataStore,
  userContext
};
