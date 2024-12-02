import type { Tables } from "@harmony/shared";

export interface IAvatar {
	userProfile: Partial<Tables<"profiles">>;
	size?: "small" | "medium" | "large";
	showStatusIndicator?: boolean;
	unseenMessages?: number;
}
