import { jsx } from "@builder.io/qwik/jsx-runtime";
import { component$, useStyles$ } from "@builder.io/qwik";
import styles from "./input-field.styles.scss.qwik.mjs";
const InputField = component$(({ ...props }) => {
  useStyles$(styles);
  return /* @__PURE__ */ jsx("input", {
    ...props,
    class: [
      "input-field"
    ]
  });
});
export {
  InputField
};
