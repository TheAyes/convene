import { component$, useStyles$ } from "@builder.io/qwik";
import { server$ } from "@builder.io/qwik-city";
import { UserStatus } from "../user-status/user-status.root";
import { type IDirectMessageList, styles } from "./direct-message-list.root";

const serverListUsers = server$(function (userId) {});

export const DirectMessageList = component$<IDirectMessageList>(({ ...props }) => {
	useStyles$(styles);

	return (
		<div {...props} class={["direct-message-list"]}>
			<UserStatus />
		</div>
	);
});
