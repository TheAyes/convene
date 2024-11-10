"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const jsxRuntime = require("@builder.io/qwik/jsx-runtime");
const qwik = require("@builder.io/qwik");
const qwikCity = require("@builder.io/qwik-city");
const userStatus_component = require("../user-status/user-status.component.qwik.cjs");
const directMessageList = require("./direct-message-list.scss.qwik.cjs");
qwikCity.server$(function(userId) {
});
const DirectMessageList = qwik.component$(({ ...props }) => {
  qwik.useStyles$(directMessageList);
  return /* @__PURE__ */ jsxRuntime.jsx("div", {
    ...props,
    class: [
      "direct-message-list"
    ],
    children: /* @__PURE__ */ jsxRuntime.jsx(userStatus_component.UserStatus, {})
  });
});
exports.DirectMessageList = DirectMessageList;
