import { component$, useStyles$ } from "@builder.io/qwik";
import { type DocumentHead, Form } from "@builder.io/qwik-city";
import { InputField } from "@harmony/components";
import styles from "./login.scss?inline";

/*export const useLoginUser = routeAction$(async (formData, requestEvent) => {
	const client = getSupabaseClient(requestEvent);

	const { data: accountData, error: accountError } = await client.auth.signInWithPassword({
		email: JSON.stringify(formData.account),
		password: JSON.stringify(formData.password)
	});

	if (accountError) {
		console.error(`ERROR: ${accountError.message}`);
		return;
	}

	throw requestEvent.redirect(LOGIN_REDIRECT, "/");
});*/

export default component$(() => {
	useStyles$(styles);

	return (
		<Form class="login">
			<div>
				<InputField aria-label="password" type="password" name="password" placeholder="Your password" />
			</div>
			<div>
				<InputField aria-label="password" type="password" name="password" placeholder="Your password" />
			</div>
			<div>
				<InputField arial-label="Reset password" type="submit" value="Reset" />
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
