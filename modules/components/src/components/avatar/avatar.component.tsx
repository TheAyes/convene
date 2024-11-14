import { component$, useComputed$, useStyles$ } from "@builder.io/qwik";
import { useSession } from "@harmony/shared/src/hooks";
import { Image as UnpicImage } from "@unpic/qwik";
import { type IAvatar, styles } from ".";
import { MessageIndicator } from "../message-indicator/message-indicator.root";
import { StatusIndicator } from "../status-indicator/status-indicator.root";

export const Avatar = component$<IAvatar>(({ showStatusIndicator = false }) => {
	useStyles$(styles);

	const {
		value: { data: session, error: sessionError }
	} = useSession();

	if (sessionError) {
		console.error(sessionError);
	}

	const url = useComputed$(() => {
		const defaultUrl = `https://avatar.iran.liara.run/public/`;

		if (session) {
			return session.profile.avatar_url ?? `${defaultUrl}?username=${session.profile.account_name}`;
		} else {
			return defaultUrl;
		}
	});

	// Todo: Replace this with the actual amount of unread messages
	const randomMessages = useComputed$(() => {
		return Math.floor(Math.random() * 10);
	});

	return (
		<div class={["avatar"]}>
			<UnpicImage src={url.value} />
			{showStatusIndicator && <StatusIndicator />}
			{randomMessages.value > 0 && <MessageIndicator messageCount={randomMessages.value} />}
		</div>
	);
});
