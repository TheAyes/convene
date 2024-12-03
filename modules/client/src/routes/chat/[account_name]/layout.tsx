import { component$, Slot, useStyles$ } from "@builder.io/qwik";
import { type DocumentHead, routeLoader$ } from "@builder.io/qwik-city";
import { Avatar } from "@harmony/components";
import { createClient } from "@harmony/shared";
import styles from "./layout.scss?inline";

export const useChatProfile = routeLoader$(async (requestEvent) => {
	const client = createClient(requestEvent);

	const { data, error } = await client
		.from("profiles")
		.select("*")
		.eq("account_name", requestEvent.params.account_name)
		.single();
	if (error) {
		console.error(error.message);
		return;
	}

	return data;
});

export default component$(() => {
	useStyles$(styles);

	const profile = useChatProfile();

	return (
		<>
			<header class={["chat-header"]}>
				{profile.value && <Avatar userProfile={profile.value} showStatusIndicator={true} />}
				<h2>{profile.value?.display_name ?? "Unknown User"}</h2>
			</header>

			<Slot />
		</>
	);
});

export const head: DocumentHead = {
	title: "Welcome to Qwik",
	meta: [
		{
			name: "description",
			content: "Qwik site description"
		}
	]
};
