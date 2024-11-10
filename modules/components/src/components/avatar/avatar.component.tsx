import { component$, useComputed$, useStyles$ } from "@builder.io/qwik";
import { Image as UnpicImage } from "@unpic/qwik";
import { type IAvatar, styles } from ".";
import { MessageIndicator } from "../message-indicator/message-indicator.root";
import { StatusIndicator } from "../status-indicator/status-indicator.root";

export const Avatar = component$<IAvatar>(
	({ username = "Ayes", gender = "girl", showStatusIndicator = false, messageCount = 5 }) => {
		useStyles$(styles);

		const url = useComputed$(() => {
			return `https://avatar.iran.liara.run/public/${gender}?username=${username}`;
		});

		return (
			<div class={["avatar"]}>
				<UnpicImage src={url.value} />
				{showStatusIndicator && <StatusIndicator />}
				{messageCount > 0 && <MessageIndicator messageCount={messageCount} />}
			</div>
		);
	}
);
