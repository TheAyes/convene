import { component$, useComputed$, useContext, useStyles$ } from "@builder.io/qwik";
import { userContext } from "@harmony/shared";
import { LuCable, LuCheck, LuMinus, LuMoonStar, LuX } from "@qwikest/icons/lucide";

import { IStatusIndicator, styles } from "./status-indicator.root";

export const StatusIndicator = component$<IStatusIndicator>(({ overrideOnlineStatus }) => {
	useStyles$(styles);

	const userData = useContext(userContext);

	const status = useComputed$(() => {
		return overrideOnlineStatus ?? userData.profile.online_status;
	});

	const statusComponent = useComputed$(() => {
		switch (status.value) {
			case "online":
				return <LuCheck />;

			case "idle":
				return <LuMoonStar />;

			case "busy":
				return <LuMinus />;

			case "offline":
				return <LuX />;

			case "disconnected":
				return <LuCable />;
		}
	});

	return <span class={["status-indicator", status.value]}>{statusComponent.value}</span>;
});
