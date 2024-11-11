import { component$, useStyles$ } from "@builder.io/qwik";
import { type DocumentHead, Form, routeAction$ } from "@builder.io/qwik-city";
import { InputField } from "@harmony/components";
import { getSupabaseClient } from "@harmony/shared/src/utils/supabaseClient";
import { LOGIN_REDIRECT } from "@harmony/shared/src/utils/tokens";
import styles from "./login.scss?inline";

export const useLoginUser = routeAction$(async (formData, requestEvent) => {
	const client = getSupabaseClient(requestEvent);

	const { error: accountError } = await client.auth.signInWithPassword({
		email: formData.account.toString(),
		password: formData.password.toString()
	});

	if (accountError) {
		console.error(`ERROR: ${accountError.message}`);
		return;
	}

	throw requestEvent.redirect(LOGIN_REDIRECT, "/");
});

export default component$(() => {
	useStyles$(styles);

	const action = useLoginUser();

	return (
		<Form class="login" action={action}>
			<div>
				<InputField aria-label="Username or email" type="text" name="account" placeholder="User@harmony.com" />
			</div>

			<div>
				<InputField aria-label="password" type="password" name="password" placeholder="Your password" />

				<a href="#">Password reset</a>
			</div>
			<div>
				<InputField arial-label="login" type="submit" value="Login" />
			</div>
		</Form>
	);
});

export const head: DocumentHead = {
	title: "Welcome to Qwik",
	meta: [
		{
			name: "description",
			content: "Qwik site description"
		}
	]
};
