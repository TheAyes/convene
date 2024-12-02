import type { RequestEventBase } from "@builder.io/qwik-city";
import { createServerClient } from "supabase-auth-helpers-qwik";
import type { Database } from "../types/";
import { createClient } from "./server";

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

export const getSupabaseProfileById = async (requestEvent: RequestEventBase, userId: string) => {
	const client = createClient(requestEvent);

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

export const getSupabaseProfileByName = async (requestEvent: RequestEventBase, accountName: string) => {
	const client = createClient(requestEvent);

	const { data: profileData, error: profileError } = await client
		.from("profiles")
		.select("account_name, display_name, avatar_url, online_status")
		.limit(1)
		.eq("account_name", accountName)
		.single();

	if (profileError) {
		return { error: profileError, data: null };
	}

	console.log(profileData);

	return { data: profileData, error: null };
};
