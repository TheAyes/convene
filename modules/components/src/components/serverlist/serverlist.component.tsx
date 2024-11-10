import { component$, useStyles$ } from "@builder.io/qwik";
import { type IServerlist, styles } from "./serverlist.root";

export const Serverlist = component$<IServerlist>(({ ...props }) => {
	useStyles$(styles);

	return <div {...props} class={["serverlist"]}></div>;
});
