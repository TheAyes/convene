"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const jsxRuntime = require("@builder.io/qwik/jsx-runtime");
const qwik = require("@builder.io/qwik");
const avatar_component = require("../avatar/avatar.component.qwik.cjs");
const userStatus_styles = require("./user-status.styles.scss.qwik.cjs");
const UserStatus = qwik.component$(({ userId = "41dc2b66-8e2c-49ee-884b-fd9e3f03b35e" }) => {
  qwik.useStylesScoped$(userStatus_styles);
  return /* @__PURE__ */ jsxRuntime.jsxs("div", {
    class: "user-status",
    children: [
      /* @__PURE__ */ jsxRuntime.jsx(avatar_component.Avatar, {
        showStatusIndicator: true
      }),
      /* @__PURE__ */ jsxRuntime.jsx("div", {})
    ]
  });
});
exports.UserStatus = UserStatus;
