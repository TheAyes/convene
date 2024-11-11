import { jsx } from "@builder.io/qwik/jsx-runtime";
import { component$, useStyles$, useContext, useComputed$ } from "@builder.io/qwik";
import { LuCable, LuX, LuMinus, LuMoonStar, LuCheck } from "../../node_modules/@qwikest/icons/lib/lu.qwik.qwik.mjs";
import { userContext } from "../data-store/data-store.component.qwik.mjs";
import styles from "./status-indicator.scss.qwik.mjs";
const StatusIndicator = component$(({ overrideOnlineStatus }) => {
  useStyles$(styles);
  useContext(userContext);
  const status = useComputed$(() => {
    return overrideOnlineStatus;
  });
  const statusComponent = useComputed$(() => {
    switch (status.value) {
      case "online":
        return /* @__PURE__ */ jsx(LuCheck, {});
      case "idle":
        return /* @__PURE__ */ jsx(LuMoonStar, {});
      case "busy":
        return /* @__PURE__ */ jsx(LuMinus, {});
      case "offline":
        return /* @__PURE__ */ jsx(LuX, {});
      case "disconnected":
        return /* @__PURE__ */ jsx(LuCable, {});
    }
  });
  return /* @__PURE__ */ jsx("span", {
    class: [
      "status-indicator",
      status.value
    ],
    children: statusComponent.value
  });
});
export {
  StatusIndicator
};
