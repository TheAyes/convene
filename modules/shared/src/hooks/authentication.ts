import { routeAction$, routeLoader$ } from "@builder.io/qwik-city";
import { getSupabaseClient } from "../utils/supabaseClient";
import { LOGIN_REDIRECT } from "../utils/tokens";

export const useLoginUser = routeAction$(async (formData, requestEvent) => {
	const client = getSupabaseClient(requestEvent);

	const { error } = await client.auth.signInWithPassword({
		email: formData.account.toString(),
		password: formData.password.toString()
	});

	if (error) {
		throw requestEvent.error(401, error.message);
	}

	throw requestEvent.redirect(LOGIN_REDIRECT, "/");
});

export const useUserData = routeLoader$(async (requestEvent) => {
	const client = getSupabaseClient(requestEvent);

	const { data, error } = await client.auth.getUser();

	if (error) throw requestEvent.error(401, error.message);

	return data.user;
});
