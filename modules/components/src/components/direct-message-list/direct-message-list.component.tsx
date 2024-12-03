import { component$, useStyles$ } from "@builder.io/qwik";
import { useDmList } from "@harmony/shared";
import { DirectMessageListEntry } from "../direct-message-list-entry/direct-message-list-entry.component";
import { type IDirectMessageList, styles } from "./direct-message-list.root";

export const DirectMessageList = component$<IDirectMessageList>(({ ...props }) => {
	useStyles$(styles);

	const {
		value: { data: dmData, error }
	} = useDmList();

	return (
		<aside {...props} class={["direct-message-list"]}>
			<section>
				<h3>Messages</h3>
				<nav>
					<ul>
						{dmData ? (
							dmData.map((data) => {
								return (
									<li>
										<DirectMessageListEntry
											accountName={data.from_user}
											lastMessage={data.content}
										/>
									</li>
								);
							})
						) : (
							<p>Error</p>
						)}
					</ul>
				</nav>
			</section>
			<section>
				<h3>Groups</h3>
			</section>
			<section>
				<h3>Servers</h3>
			</section>
		</aside>
	);
});
