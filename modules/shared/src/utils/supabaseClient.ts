import { RequestEventBase } from "@builder.io/qwik-city";
import { createServerClient } from "supabase-auth-helpers-qwik";

let supabaseClient: ReturnType<typeof createServerClient>;

export const getSupabaseClient = (requestEvent: RequestEventBase) => {
	if (!supabaseClient) {
		supabaseClient = createServerClient(
			requestEvent.env.get("PUBLIC_SUPABASE_URL")!,
			requestEvent.env.get("PUBLIC_SUPABASE_ANON_KEY")!,
			requestEvent
		);
	}
	return supabaseClient;
};
