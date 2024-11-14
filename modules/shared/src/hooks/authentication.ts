import { routeLoader$ } from "@builder.io/qwik-city";
import { IUserData } from "../types";
import { getSupabaseClient, getSupabaseProfile, LOGIN_REDIRECT } from "../utils";

export const useSession = routeLoader$(
	async (requestEvent): Promise<{ data: IUserData; error: null } | { data: null; error: any }> => {
		const client = getSupabaseClient(requestEvent);

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
	}
);
