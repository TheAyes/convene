"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const jsxRuntime = require("@builder.io/qwik/jsx-runtime");
const qwik = require("@builder.io/qwik");
const userContext = qwik.createContextId("user");
const DataStore = qwik.component$(() => {
  const userData = qwik.useStore({
    username: "Ayes",
    status: "busy"
  });
  qwik.useContextProvider(userContext, userData);
  return /* @__PURE__ */ jsxRuntime.jsx(qwik.Slot, {});
});
exports.DataStore = DataStore;
exports.userContext = userContext;
