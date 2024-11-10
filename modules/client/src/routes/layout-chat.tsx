import { component$, Slot } from "@builder.io/qwik";
import { RequestHandler, routeLoader$ } from "@builder.io/qwik-city";
import { DirectMessageList, Header } from "@harmony/components";
import { getSupabaseClient } from "@harmony/shared/src/utils/supabaseClient";
import { LOGIN_REDIRECT } from "@harmony/shared/src/utils/tokens";

export const onGet: RequestHandler = async ({ cacheControl }) => {
	// Control caching for this request for best performance and to reduce hosting costs:
	// https://qwik.dev/docs/caching/
	/*cacheControl({
		// Always serve a cached response by default, up to a week stale
		staleWhileRevalidate: 60 * 60 * 24 * 7,
		// Max once every 5 seconds, revalidate on the server to get a fresh version of this page
		maxAge: 5
	});*/
};

export const onRequest: RequestHandler = async (requestEvent) => {
	const client = getSupabaseClient(requestEvent);

	const { error } = await client.auth.getSession();

	if (error) throw requestEvent.redirect(LOGIN_REDIRECT, "/login");
};

export const useUserData = routeLoader$(async () => {});

export default component$(() => {
	return (
		<>
			<Header />
			<DirectMessageList />
			<Slot />
		</>
	);
});
