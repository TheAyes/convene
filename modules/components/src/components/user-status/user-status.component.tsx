import { component$, useContext, useStylesScoped$ } from "@builder.io/qwik";
import { userContext } from "@harmony/shared";

import { Avatar } from "../avatar";
import { IUserStatus, styles } from "./user-status.root";

export const UserStatus = component$<IUserStatus>(({ userId = "41dc2b66-8e2c-49ee-884b-fd9e3f03b35e" }) => {
	useStylesScoped$(styles);

	const userData = useContext(userContext);

	return (
		<div class="user-status">
			<Avatar showStatusIndicator={true} />

			<div>
				<h4>{userData.profile.display_name}</h4>

				<p>{userData.profile.updated_at}</p>
			</div>
		</div>
	);
});
