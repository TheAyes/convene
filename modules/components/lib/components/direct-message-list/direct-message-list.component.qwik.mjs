import { jsx } from "@builder.io/qwik/jsx-runtime";
import { component$, useStyles$ } from "@builder.io/qwik";
import { server$ } from "@builder.io/qwik-city";
import { UserStatus } from "../user-status/user-status.component.qwik.mjs";
import styles from "./direct-message-list.scss.qwik.mjs";
server$(function(userId) {
});
const DirectMessageList = component$(({ ...props }) => {
  useStyles$(styles);
  return /* @__PURE__ */ jsx("div", {
    ...props,
    class: [
      "direct-message-list"
    ],
    children: /* @__PURE__ */ jsx(UserStatus, {})
  });
});
export {
  DirectMessageList
};
