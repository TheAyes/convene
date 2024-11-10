"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const jsxRuntime = require("@builder.io/qwik/jsx-runtime");
const qwik = require("@builder.io/qwik");
const index_qwik = require("../../node_modules/@unpic/qwik/lib/index.qwik.qwik.cjs");
const avatar = require("./avatar.scss.qwik.cjs");
const messageIndicator_component = require("../message-indicator/message-indicator.component.qwik.cjs");
const statusIndicator_component = require("../status-indicator/status-indicator.component.qwik.cjs");
const Avatar = qwik.component$(({ username = "Ayes", gender = "girl", showStatusIndicator = false, messageCount = 5 }) => {
  qwik.useStyles$(avatar);
  const url = qwik.useComputed$(() => {
    return `https://avatar.iran.liara.run/public/${gender}?username=${username}`;
  });
  return /* @__PURE__ */ jsxRuntime.jsxs("div", {
    class: [
      "avatar"
    ],
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(index_qwik.Image, {
        src: url.value
      }),
      showStatusIndicator && /* @__PURE__ */ jsxRuntime.jsx(statusIndicator_component.StatusIndicator, {}),
      messageCount > 0 && /* @__PURE__ */ jsxRuntime.jsx(messageIndicator_component.MessageIndicator, {
        messageCount
      })
    ]
  });
});
exports.Avatar = Avatar;
