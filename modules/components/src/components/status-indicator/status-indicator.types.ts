import { TOnlineStates } from "@harmony/shared/src/types";

export interface IStatusIndicator {
	overrideOnlineStatus?: TOnlineStates;

	[key: string]: any;
}
