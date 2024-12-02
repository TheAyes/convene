import type { Database } from "@harmony/shared";

export interface IDirectMessage {
	message: Partial<Database["public"]["Tables"]["messages"]["Row"]>;

	[key: string]: any;
}
