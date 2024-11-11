import { jsxs, jsx } from "@builder.io/qwik/jsx-runtime";
import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { Avatar } from "../avatar/avatar.component.qwik.mjs";
import styles from "./user-status.styles.scss.qwik.mjs";
const UserStatus = component$(({ userId = "41dc2b66-8e2c-49ee-884b-fd9e3f03b35e" }) => {
  useStylesScoped$(styles);
  return /* @__PURE__ */ jsxs("div", {
    class: "user-status",
    children: [
      /* @__PURE__ */ jsx(Avatar, {
        showStatusIndicator: true
      }),
      /* @__PURE__ */ jsx("div", {})
    ]
  });
});
export {
  UserStatus
};
