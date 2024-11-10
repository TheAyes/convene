import { component$, useStyles$ } from "@builder.io/qwik";
import { UserStatus } from "../user-status/user-status.root";
import { styles } from "./header.root";

export const Header = component$(() => {
	useStyles$(styles);

	return (
		<div class={["header"]}>
			<UserStatus />
		</div>
	);
});
