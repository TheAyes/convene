import { jsxs, jsx } from "@builder.io/qwik/jsx-runtime";
import { component$, useStyles$, useComputed$ } from "@builder.io/qwik";
import { Image } from "../../node_modules/@unpic/qwik/lib/index.qwik.qwik.mjs";
import styles from "./avatar.scss.qwik.mjs";
import { MessageIndicator } from "../message-indicator/message-indicator.component.qwik.mjs";
import { StatusIndicator } from "../status-indicator/status-indicator.component.qwik.mjs";
const Avatar = component$(({ username = "Ayes", gender = "girl", showStatusIndicator = false, messageCount = 5 }) => {
  useStyles$(styles);
  const url = useComputed$(() => {
    return `https://avatar.iran.liara.run/public/${gender}?username=${username}`;
  });
  return /* @__PURE__ */ jsxs("div", {
    class: [
      "avatar"
    ],
    children: [
      /* @__PURE__ */ jsx(Image, {
        src: url.value
      }),
      showStatusIndicator && /* @__PURE__ */ jsx(StatusIndicator, {}),
      messageCount > 0 && /* @__PURE__ */ jsx(MessageIndicator, {
        messageCount
      })
    ]
  });
});
export {
  Avatar
};
