"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const jsxRuntime = require("@builder.io/qwik/jsx-runtime");
const qwik = require("@builder.io/qwik");
const inputField_styles = require("./input-field.styles.scss.qwik.cjs");
const InputField = qwik.component$(({ ...props }) => {
  qwik.useStyles$(inputField_styles);
  return /* @__PURE__ */ jsxRuntime.jsx("input", {
    ...props,
    class: [
      "input-field"
    ]
  });
});
exports.InputField = InputField;
