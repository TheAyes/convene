import { component$, Resource, useResource$, useStyles$ } from "@builder.io/qwik";

import { getServerProfile } from "@harmony/shared";
import { Avatar } from "../avatar";
import { NavLink } from "../nav-link/nav-link.component";
import { type IDirectMessageListEntry, styles } from "./direct-message-list-entry.root";

export const DirectMessageListEntry = component$<IDirectMessageListEntry>(({ userId, ...props }) => {
	useStyles$(styles);

	const userResource = useResource$(async () => await getServerProfile(userId));

	return (
		<NavLink
			{...props}
			activeClass="currently-active"
			href={`/chat/${userId}/`}
			class={["direct-message-list-entry"]}
		>
			<Resource
				value={userResource}
				onResolved={({ data, error }) => {
					if (error) {
						console.error(error.message);
						return;
					}

					return (
						<>
							<Avatar userProfile={data} showStatusIndicator={true} />
							<div>
								<h4>{data?.display_name}</h4>
							</div>
						</>
					);
				}}
			/>
		</NavLink>
	);
});
