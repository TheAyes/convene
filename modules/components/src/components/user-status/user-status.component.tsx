import { component$, useStylesScoped$ } from "@builder.io/qwik";

import { Avatar } from "../avatar";
import { IUserStatus, styles } from "./user-status.root";

export const UserStatus = component$<IUserStatus>(({ userId = "41dc2b66-8e2c-49ee-884b-fd9e3f03b35e" }) => {
	useStylesScoped$(styles);

	return (
		<div class="user-status">
			<Avatar showStatusIndicator={true} />

			<div>
				{/*<h4>{userData.value.profile}</h4>*/}

				{/*<p>{userData.value}</p>*/}
			</div>
		</div>
	);
});
