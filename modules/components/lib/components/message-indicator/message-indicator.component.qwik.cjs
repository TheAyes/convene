"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const jsxRuntime = require("@builder.io/qwik/jsx-runtime");
const qwik = require("@builder.io/qwik");
const messageIndicator = require("./message-indicator.scss.qwik.cjs");
const MessageIndicator = qwik.component$(({ messageCount = 0, ...props }) => {
  qwik.useStyles$(messageIndicator);
  return /* @__PURE__ */ jsxRuntime.jsx("span", {
    ...props,
    class: [
      "message-indicator"
    ],
    children: /* @__PURE__ */ jsxRuntime.jsx("p", {
      children: messageCount
    })
  });
});
exports.MessageIndicator = MessageIndicator;
