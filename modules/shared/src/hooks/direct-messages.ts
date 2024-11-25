import { routeLoader$ } from "@builder.io/qwik-city";
import { createClient } from "../utils";

export const useDmList = routeLoader$(async (requestEvent) => {
	const client = createClient(requestEvent);

	const { data, error } = await client.from("messages").select("from_user, sent_at.max()");

	if (error) {
		return console.error(error.message);
	}

	return { data: data!.sort((a, b) => a.max > b.max) };
});
