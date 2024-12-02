import type { Database } from "@harmony/shared";

export interface IAvatar {
	userProfile: Partial<Database["public"]["Tables"]["profiles"]["Row"]>;
	size?: "small" | "medium" | "large";
	showStatusIndicator?: boolean;
	unseenMessages?: number;
}
