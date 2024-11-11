import { RequestEvent, RequestEventBase } from "@builder.io/qwik-city";
import { createServerClient } from "supabase-auth-helpers-qwik";
import { Database } from "../types/";
import { LOGIN_REDIRECT } from "./tokens";

let supabaseClient: ReturnType<typeof createServerClient<Database>>;

export const getSupabaseClient = (requestEvent: RequestEventBase) => {
	if (!supabaseClient) {
		supabaseClient = createServerClient<Database>(
			requestEvent.env.get("PUBLIC_SUPABASE_URL")!,
			requestEvent.env.get("PUBLIC_SUPABASE_ANON_KEY")!,
			requestEvent
		);
	}
	return supabaseClient;
};

export const getSupabaseProfile = async (requestEvent: RequestEventBase, userId: string) => {
	const client = getSupabaseClient(requestEvent);

	const { data: profileData, error: profileError } = await client
		.from("profiles")
		.select("*")
		.limit(1)
		.eq("user_id", userId)
		.single();

	if (profileError) {
		return { error: profileError, data: null };
	}

	return { data: profileData, error: null };
};

export const getUserData = async (requestEvent: RequestEvent) => {
	const client = getSupabaseClient(requestEvent);

	const { data: accountData, error: accountError } = await client.auth.getUser();
	if (accountError) requestEvent.redirect(LOGIN_REDIRECT, "/login");

	const { data: profileData, error: profileError } = await getSupabaseProfile(requestEvent, accountData.user!.id);
	if (profileError) return console.error(`ERROR: ${profileError.message}`);

	return { account: accountData, profile: profileData };
};
