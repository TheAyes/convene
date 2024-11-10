import { component$, useStyles$ } from "@builder.io/qwik";
import { type IMessageIndicator, styles } from "./message-indicator.root";

export const MessageIndicator = component$<IMessageIndicator>(({ messageCount = 0, ...props }) => {
	useStyles$(styles);

	return (
		<span {...props} class={["message-indicator"]}>
			<p>{messageCount}</p>
		</span>
	);
});
