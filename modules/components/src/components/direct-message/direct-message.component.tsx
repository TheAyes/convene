import { component$, useStyles$ } from "@builder.io/qwik";
import { type IDirectMessage, styles } from "./direct-message.root";

export const DirectMessage = component$<IDirectMessage>(({ ...props }) => {
	useStyles$(styles);

	return (
		<div {...props} class={["direct-message"]}>

		</div>
	);
});
