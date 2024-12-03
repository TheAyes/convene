import { component$, Resource, useComputed$, useStyles$ } from "@builder.io/qwik";
import { Image as UnpicImage } from "@unpic/qwik";
import { type IAvatar, styles } from ".";
import { MessageIndicator } from "../message-indicator/message-indicator.root";
import { StatusIndicator } from "../status-indicator/status-indicator.root";

export const Avatar = component$<IAvatar>(({ userProfile, showStatusIndicator = false, unseenMessages = 0 }) => {
	useStyles$(styles);

	const urlResource = useComputed$(() => {
		const defaultUrl = `https://avatar.iran.liara.run/public/`;

		if (userProfile) {
			return userProfile.avatar_url ?? `${defaultUrl}?username=${userProfile.account_name}`;
		} else {
			return defaultUrl;
		}
	});

	return (
		<div class={["avatar"]}>
			<Resource onResolved={(url) => <UnpicImage src={url} />} value={urlResource} />

			{showStatusIndicator && <StatusIndicator onlineStatus={userProfile.online_status} />}
			{unseenMessages > 0 && <MessageIndicator messageCount={unseenMessages} />}
		</div>
	);
});
