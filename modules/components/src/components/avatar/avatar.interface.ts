import type { Database } from "@harmony/shared";

export interface IAvatar {
	userProfile: Database["public"]["Tables"]["profiles"]["Row"];
	size?: "small" | "medium" | "large";
	showStatusIndicator?: boolean;
}
