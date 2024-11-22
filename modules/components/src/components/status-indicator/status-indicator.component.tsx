import { component$, useComputed$, useStyles$ } from "@builder.io/qwik";
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

export const StatusIndicator = component$<IStatusIndicator>(({ overrideOnlineStatus }) => {
	useStyles$(styles);

	/*const state = useSignal<TOnlineStates>("online");*/

	/*useTask$(() => {
		subscribeToOnlineStatus(state).then();
	});*/

	/*useTask$(({ track }) => {
		track(state);
	});*/

	const statusComponent = useComputed$(() => {
		switch (overrideOnlineStatus) {
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

	return <span class={["status-indicator", overrideOnlineStatus]}>{statusComponent}</span>;
});
