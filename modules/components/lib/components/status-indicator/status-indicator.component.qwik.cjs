"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const jsxRuntime = require("@builder.io/qwik/jsx-runtime");
const qwik = require("@builder.io/qwik");
const lu_qwik = require("../../node_modules/@qwikest/icons/lib/lu.qwik.qwik.cjs");
const dataStore_component = require("../data-store/data-store.component.qwik.cjs");
const statusIndicator = require("./status-indicator.scss.qwik.cjs");
const StatusIndicator = qwik.component$(({ overrideOnlineStatus }) => {
  qwik.useStyles$(statusIndicator);
  qwik.useContext(dataStore_component.userContext);
  const status = qwik.useComputed$(() => {
    return overrideOnlineStatus;
  });
  const statusComponent = qwik.useComputed$(() => {
    switch (status.value) {
      case "online":
        return /* @__PURE__ */ jsxRuntime.jsx(lu_qwik.LuCheck, {});
      case "idle":
        return /* @__PURE__ */ jsxRuntime.jsx(lu_qwik.LuMoonStar, {});
      case "busy":
        return /* @__PURE__ */ jsxRuntime.jsx(lu_qwik.LuMinus, {});
      case "offline":
        return /* @__PURE__ */ jsxRuntime.jsx(lu_qwik.LuX, {});
      case "disconnected":
        return /* @__PURE__ */ jsxRuntime.jsx(lu_qwik.LuCable, {});
    }
  });
  return /* @__PURE__ */ jsxRuntime.jsx("span", {
    class: [
      "status-indicator",
      status.value
    ],
    children: statusComponent.value
  });
});
exports.StatusIndicator = StatusIndicator;
