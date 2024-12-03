import { component$, Resource, useResource$, useStyles$ } from "@builder.io/qwik";

import { getServerProfileByName, useUnseenMessageCount } from "@harmony/shared";
import { Avatar } from "../avatar";
import { NavLink } from "../nav-link/nav-link.component";
import { type IDirectMessageListEntry, styles } from "./direct-message-list-entry.root";

export const DirectMessageListEntry = component$<IDirectMessageListEntry>(({ accountName, lastMessage, ...props }) => {
	useStyles$(styles);

	const userResource = useResource$(async () => await getServerProfileByName(accountName));

	const unseenMessages = useUnseenMessageCount();

	return (
		<NavLink
			{...props}
			activeClass="currently-active"
			href={`/chat/${accountName}/`}
			class={["direct-message-list-entry"]}
		>
			<Resource
				value={userResource}
				onResolved={({ data, error }) => {
					if (error) {
						console.error(error.message);
						return <></>;
					}

					return (
						<>
							<Avatar
								userProfile={data}
								showStatusIndicator={true}
								unseenMessages={unseenMessages.value.data?.count}
							/>
							<div>
								<h4>{data?.display_name}</h4>
								<p>{lastMessage}</p>
							</div>
						</>
					);
				}}
			/>
		</NavLink>
	);
});
