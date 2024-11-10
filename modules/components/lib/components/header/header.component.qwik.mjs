import { jsx } from "@builder.io/qwik/jsx-runtime";
import { component$, useStyles$ } from "@builder.io/qwik";
import { UserStatus } from "../user-status/user-status.component.qwik.mjs";
import styles from "./header.scss.qwik.mjs";
const Header = component$(() => {
  useStyles$(styles);
  return /* @__PURE__ */ jsx("div", {
    class: [
      "header"
    ],
    children: /* @__PURE__ */ jsx(UserStatus, {})
  });
});
export {
  Header
};
