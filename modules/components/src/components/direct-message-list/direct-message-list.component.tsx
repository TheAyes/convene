import { component$, useStyles$ } from "@builder.io/qwik";
import { server$ } from "@builder.io/qwik-city";
import { DirectMessageListEntry } from "../direct-message-list-entry/direct-message-list-entry.component";
import { type IDirectMessageList, styles } from "./direct-message-list.root";

const serverListUsers = server$(function (userId) {});

export const DirectMessageList = component$<IDirectMessageList>(({ ...props }) => {
	useStyles$(styles);

	return (
		<aside {...props} class={["direct-message-list"]}>
			<section>
				<h3>Messages</h3>
				<nav>
					<ul>
						<li>
							<DirectMessageListEntry userId="542e7d81-a462-4a67-abb3-880e3d0e4d12" />
						</li>
					</ul>
				</nav>
			</section>
			<section>
				<h3>Servers</h3>
			</section>
		</aside>
	);
});
