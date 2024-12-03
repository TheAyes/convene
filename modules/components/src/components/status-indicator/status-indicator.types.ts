import type { TOnlineStates } from "@harmony/shared/src/types";

export interface IStatusIndicator {
	onlineStatus?: TOnlineStates;

	[key: string]: any;
}
