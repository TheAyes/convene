import { server$ } from "@builder.io/qwik-city";
import { getSupabaseProfile } from "@harmony/shared";
import type { UUID } from "node:crypto";



export interface IDirectMessageListEntry {
	userId: UUID;

	[key: string]: any;
}
