"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const jsxRuntime = require("@builder.io/qwik/jsx-runtime");
const qwik = require("@builder.io/qwik");
const userStatus_component = require("../user-status/user-status.component.qwik.cjs");
const header = require("./header.scss.qwik.cjs");
const Header = qwik.component$(() => {
  qwik.useStyles$(header);
  return /* @__PURE__ */ jsxRuntime.jsx("div", {
    class: [
      "header"
    ],
    children: /* @__PURE__ */ jsxRuntime.jsx(userStatus_component.UserStatus, {})
  });
});
exports.Header = Header;
