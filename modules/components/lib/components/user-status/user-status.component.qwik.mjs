import { jsxs, jsx } from "@builder.io/qwik/jsx-runtime";
import { component$, useStylesScoped$, useContext } from "@builder.io/qwik";
import { Avatar } from "../avatar/avatar.component.qwik.mjs";
import { userContext } from "../data-store/data-store.component.qwik.mjs";
import styles from "./user-status.styles.scss.qwik.mjs";
const UserStatus = component$(({ userId = "41dc2b66-8e2c-49ee-884b-fd9e3f03b35e" }) => {
  useStylesScoped$(styles);
  const userData = useContext(userContext);
  return /* @__PURE__ */ jsxs("div", {
    class: "user-status",
    children: [
      /* @__PURE__ */ jsx(Avatar, {
        showStatusIndicator: true
      }),
      /* @__PURE__ */ jsxs("div", {
        children: [
          /* @__PURE__ */ jsx("h4", {
            children: userData.username
          }),
          /* @__PURE__ */ jsx("p", {
            children: userData.status
          })
        ]
      })
    ]
  });
});
export {
  UserStatus
};
