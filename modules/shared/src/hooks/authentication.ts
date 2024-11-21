import { routeLoader$ } from "@builder.io/qwik-city";
import { createClient, getSupabaseProfile, LOGIN_REDIRECT } from "../utils";

export const useSession = routeLoader$(async(requestEvent) => {
	const client = createClient(requestEvent);

	const { data: userData, error: userError } = await client.auth.getUser();
	if (userError) throw requestEvent.redirect(LOGIN_REDIRECT, "/login");

	const { data: profileData, error: profileError } = await getSupabaseProfile(requestEvent, userData.user.id);
	if (profileError) return { data: null, error: profileError };

	return {
		data: {
			account: userData.user,
			profile: profileData
		},
		error: null
	};
});
