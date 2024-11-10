import { jsx } from "@builder.io/qwik/jsx-runtime";
import { component$, useStyles$ } from "@builder.io/qwik";
import styles from "./message-indicator.scss.qwik.mjs";
const MessageIndicator = component$(({ messageCount = 0, ...props }) => {
  useStyles$(styles);
  return /* @__PURE__ */ jsx("span", {
    ...props,
    class: [
      "message-indicator"
    ],
    children: /* @__PURE__ */ jsx("p", {
      children: messageCount
    })
  });
});
export {
  MessageIndicator
};
