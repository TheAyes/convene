import { component$, createContextId, Slot, useStyles$ } from "@builder.io/qwik";
import { RequestHandler, routeLoader$ } from "@builder.io/qwik-city";
import { UserStatus } from "@harmony/components";
import { IUserData } from "@harmony/components/lib-types/components/data-store/data-store.root";
import { getSupabaseClient, getSupabaseProfile } from "@harmony/shared/src/utils/supabaseClient";
import { LOGIN_REDIRECT, USER_DATA } from "@harmony/shared/src/utils/tokens";

import styles from "./layout.scss?inline";

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

export const useSession = routeLoader$<IUserData>(async (requestEvent) => {
	const client = getSupabaseClient(requestEvent);

	const { data: accountData, error: accountError } = await client.auth.getUser();
	if (accountError) throw requestEvent.redirect(LOGIN_REDIRECT, "/login");

	const { data: profileData, error: profileError } = await getSupabaseProfile(requestEvent, accountData.user.id);
	if (profileError) return console.error(`ERROR: ${profileError.message}`);

	console.log(profileData);

	return { account: accountData, profile: profileData };
});

export const userContext = createContextId(USER_DATA);

export default component$(() => {
	useStyles$(styles);

	const session = useSession();

	return (
		<div class="root-layout">
			<aside>
				<UserStatus />
			</aside>
			<main>
				<Slot />
			</main>
		</div>
	);
});
