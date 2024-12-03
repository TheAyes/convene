import { component$, useSignal, useStyles$ } from "@builder.io/qwik";
import { useDmList } from "@harmony/shared";
import { DirectMessageSender } from "../direct-message-sender/direct-message-sender.root";
import { type IDirectMessageList, styles } from "./direct-message-list.root";

export const Sidebar = component$<IDirectMessageList>(({ ...props }) => {
	useStyles$(styles);

	const {
		value: { data: dmData, error }
	} = useDmList();

	const barWidth = useSignal(300);

	return (
		<aside {...props} class={["sidebar"]} style={{ width: `${barWidth.value}px` }}>
			<section>
				<h3>Messages</h3>
				<nav>
					<ul>
						{dmData ? (
							dmData.map((data) => {
								return (
									<li>
										<DirectMessageSender accountName={data.from_user} lastMessage={data.content} />
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
			<div class="resize-thumb" />
		</aside>
	);
});
