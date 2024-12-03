import { component$, Fragment, type JSXNode, useStyles$ } from "@builder.io/qwik";
import { type TOnlineStates } from "@harmony/shared";
import type { IconProps } from "@qwikest/icons";
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

const components: { [K in TOnlineStates]: (props: IconProps) => JSXNode } = {
	online: LuCheck,
	idle: LuMoonStar,
	offline: LuX,
	busy: LuMinus,
	disconnected: LuCable
};

export const StatusIndicator = component$<IStatusIndicator>(({ onlineStatus = "offline" }) => {
	useStyles$(styles);

	const Icon = components[onlineStatus] ?? Fragment

	return <span class={["status-indicator", onlineStatus]}><Icon/></span>;
});
