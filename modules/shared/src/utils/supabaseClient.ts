import type { RequestEventBase } from "@builder.io/qwik-city";
import type { Database } from "../types";
import { createClient } from "./server";

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

	const sanitizedProfileData = {
		...profileData,
		online_status: String(profileData.online_status) as Database["public"]["Enums"]["online_states"]
	};

	console.log(sanitizedProfileData);

	return { data: sanitizedProfileData, error: null };
};
