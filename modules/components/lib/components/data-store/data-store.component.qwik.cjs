"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const jsxRuntime = require("@builder.io/qwik/jsx-runtime");
const qwik = require("@builder.io/qwik");
const userContext = qwik.createContextId("user");
const DataStore = qwik.component$(() => {
  const userData = qwik.useStore({
    account: void 0,
    profile: void 0,
    setUserData: qwik.$(function(payload) {
      if (!payload) {
        console.error("No payload provided");
        return;
      }
      this.account = payload.account;
      this.profile = payload.profile;
      console.log(this);
    })
  });
  qwik.useContextProvider(userContext, userData);
  return /* @__PURE__ */ jsxRuntime.jsx(qwik.Slot, {});
});
exports.DataStore = DataStore;
exports.userContext = userContext;
