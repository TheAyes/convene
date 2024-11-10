import { component$, useStyles$ } from "@builder.io/qwik";
import { type DocumentHead, Form } from "@builder.io/qwik-city";
import { InputField } from "@harmony/components";
import { useLoginUser } from "@harmony/shared";
import styles from "./login.scss?inline";

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
