import { component$ } from "@builder.io/qwik";
import { type DocumentHead, routeLoader$ } from "@builder.io/qwik-city";
import { DirectMessage } from "@harmony/components";
import { createClient } from "@harmony/shared";

export const useMessages = routeLoader$(async (requestEvent) => {
	const client = createClient(requestEvent);

	const { data, error } = await client.from("messages").select("from_user, to_user, content, sent_at");
	if (error) {
		return { data: null, error };
	}

	return { data, error: null };
});

export default component$(() => {
	const {
		value: { data: messages, error: messagesError }
	} = useMessages();

	return (
		<main>
			{messagesError ? (
				<p>{messagesError.message}</p>
			) : (
				messages?.map((message) => {
					return <DirectMessage message={message} />;
				})
			)}
		</main>
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
