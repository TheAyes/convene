import { component$, useStyles$ } from "@builder.io/qwik";
import { type IDirectMessage, styles } from "./direct-message.root";

export const DirectMessage = component$<IDirectMessage>(({ message, ...props }) => {
	useStyles$(styles);

	return (
		<li>
			<article {...props} class={["direct-message"]}>
				<h3>{message.from_user}</h3>
				<p>{message.content}</p>
			</article>
		</li>
	);
});
