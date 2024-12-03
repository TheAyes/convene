import { component$, Fragment, type JSXOutput, useStyles$ } from "@builder.io/qwik";
import { type Tables } from "@harmony/shared";
import { LuCable, LuCheck, LuMinus, LuMoonStar, LuX } from "@qwikest/icons/lucide";

import { type IStatusIndicator, styles } from "./status-indicator.root";

/*const subscribeToOnlineStatus = server$(function (stateSignal: Signal<TOnlineStates>) {
	const client = createClient(this);

	const presenceChannel = client.realtime.channel("online-status");
	presenceChannel
		.on("presence", { event: "sync" }, () => {
			const newState = presenceChannel.state;
			console.log("sync", newState);
		})
		.subscribe(async(status) => {
			if (status === "SUBSCRIBED") {
				await presenceChannel.track({online_at: new Date().toISOString()})
			}
		}, 1500);
});*/

const components: { [K in Tables<"profiles">["online_status"]]: JSXOutput } = {
	online: <LuCheck />,
	idle: <LuMoonStar />,
	offline: <LuX />,
	busy: <LuMinus />,
	disconnected: <LuCable />
};

export const StatusIndicator = component$<IStatusIndicator>(({ onlineStatus = "offline" }) => {
	useStyles$(styles);

	return <span class={["status-indicator", onlineStatus]}>{components[onlineStatus] ?? <Fragment />}</span>;
});
