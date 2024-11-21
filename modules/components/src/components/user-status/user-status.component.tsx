import {
	component$,
	createContextId,
	Resource,
	useContextProvider,
	useResource$,
	useStore,
	useStylesScoped$
} from "@builder.io/qwik";
import { server$ } from "@builder.io/qwik-city";
import { getSupabaseProfile } from "@harmony/shared";
import { Avatar } from "../avatar";
import type { IUserStatus } from "./user-status.root";
import { styles } from "./user-status.root";

export const userStatusContext = createContextId("user-status");

const getUserProfile = server$(function (userId: string) {
	return getSupabaseProfile(this, userId);
});

export const UserStatus = component$<IUserStatus>(({ userId = "41dc2b66-8e2c-49ee-884b-fd9e3f03b35e" }) => {
	useStylesScoped$(styles);

	const userStore = useStore({
		userId: userId
	});

	const userResource = useResource$(async () => await getUserProfile(userId));

	useContextProvider(userStatusContext, userStore);

	return (
		<div class="user-status">
			<Avatar showStatusIndicator={true} />

			<div>
				<Resource
					value={userResource}
					onResolved={({ data, error }) => {
						if (error) {
							console.error(error.message);
							return;
						}

						return (
							<>
								<h4>{data?.display_name}</h4>

								<p>{data?.avatar_url}</p>
							</>
						);
					}}
				/>
			</div>
		</div>
	);
});
