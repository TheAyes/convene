import { component$, useContext, useStylesScoped$ } from "@builder.io/qwik";
import { Avatar } from "../avatar";
import { userContext } from "../data-store/data-store.component";
import { IUserStatus, styles } from "./user-status.root";

export const UserStatus = component$<IUserStatus>(({ userId = "41dc2b66-8e2c-49ee-884b-fd9e3f03b35e" }) => {
	useStylesScoped$(styles);

	const userData = useContext(userContext);

	return (
		<div class="user-status">
			<Avatar showStatusIndicator={true} />

			<div>
				<h4>{userData.username}</h4>

				<p>{userData.status}</p>
			</div>
		</div>
	);
});
