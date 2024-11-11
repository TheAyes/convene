/*export const useUserData = routeLoader$(async (requestEvent) => {
	const client = getSupabaseClient(requestEvent);

	const { data: userData, error } = await client.auth.getUser();

	const { data: profileData } = await client.from("profiles").select("*");

	if (error) throw requestEvent.redirect(LOGIN_REDIRECT, "/login");

	return { user: userData.user, profile: profileData };
});*/
