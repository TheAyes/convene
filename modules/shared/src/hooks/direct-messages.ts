import { routeLoader$ } from "@builder.io/qwik-city";
import { createClient } from "../utils";

export const useDmList = routeLoader$(async (requestEvent) => {
	const client = createClient(requestEvent);

	const { data, error } = await client
		.from("messages")
		.select("from_user, content, sent_at.max()")
		.neq("from_user", "ayes")
		.returns<
			{
				from_user: string;
				content: string;
				max: string;
			}[]
		>();

	if (error) {
		return { data: null, error: error };
	}
	data!.sort((a, b) => {
		const aTime = new Date(a.max);
		const bTime = new Date(b.max);
		return aTime.getTime() - bTime.getTime();
	});

	return { data, error: null };
});

export const useUnseenMessageCount = routeLoader$(async (requestEvent) => {
	const client = createClient(requestEvent);

	/*const { data, error } = await client
		.from("messages")
		.select("from_user, to_user, content, sent_at.count()")
		.neq("seen_at", null)
		.returns<{ from_user: string; to_user: string; content: string; count: number }>();

	return { data, error };*/
	return { data: {}, error: {} } as any;
});
