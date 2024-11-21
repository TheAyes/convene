import { component$, useStyles$ } from "@builder.io/qwik";
import { server$ } from "@builder.io/qwik-city";
import { UserStatus } from "../user-status/user-status.root";
import { type IDirectMessageList, styles } from "./direct-message-list.root";

const serverListUsers = server$(function (userId) {});

export const DirectMessageList = component$<IDirectMessageList>(({ ...props }) => {
	useStyles$(styles);

	return (
		<div {...props} class={["direct-message-list"]}>
			<UserStatus  userId="41dc2b66-8e2c-49ee-884b-fd9e3f03b35e" />
			<UserStatus  userId="542e7d81-a462-4a67-abb3-880e3d0e4d12" />
		</div>
	);
});
