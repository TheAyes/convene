import { component$, useSignal, useStyles$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { LoginForm } from "@harmony/components";
import styles from "./login.scss?inline";

/*export const useLoginUser = routeAction$(async (formData, requestEvent) => {
	const client = getSupabaseClient(requestEvent);

	const { data: accountData, error: accountError } = await client.auth.signInWithPassword({
		email: JSON.stringify(formData.account),
		password: JSON.stringify(formData.password)
	});

	if (accountError) {
		console.error(`${accountError.message}`);
		return;
	}

	console.log("authenticated");

	throw requestEvent.redirect(LOGIN_REDIRECT, "/");
});*/

/*export const sendPasswordReset = server$(async function (email: string) {
	const client = getSupabaseClient(this);

	const { error: passwordResetError } = await client.auth.resetPasswordForEmail(email, {
		redirectTo: "/reset-password"
	});

	if (passwordResetError) {
		console.error(passwordResetError.message);
		return false;
	}

	return true;
});*/

export default component$(() => {
	useStyles$(styles);

	const email = useSignal("");

	//const action = useLoginUser();

	return (
		/*<Form class="login" action={action}>
			<div>
				<InputField
					aria-label="Email"
					type="text"
					value={email}
					onChange$={(inputEvent, element) => {
						email.value = element.value ?? "";
					}}
					name="account"
					placeholder="User@harmony.com"
				/>
			</div>

			<div>
				<InputField aria-label="password" type="password" name="password" placeholder="Your password" />

				<a
					href="#"
					onClick$={async () => {
						const success = await sendPasswordReset(email.value);
					}}
				>
					Password reset
				</a>
			</div>
			<div>
				<InputField arial-label="login" type="submit" value="Login" />
			</div>
		</Form>*/
		<LoginForm />
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
