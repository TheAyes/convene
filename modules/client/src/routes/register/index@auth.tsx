import { component$, useComputed$, useStylesScoped$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { InputField } from "@harmony/components";
import { generateRandomPassword } from "@harmony/shared/src/utils";
import styles from "./register.scss?inline";

export default component$(() => {
	useStylesScoped$(styles);

	const password = useComputed$(async () => {
		return generateRandomPassword();
	});

	return (
		<form method="POST" class="login">
			<div>
				<InputField aria-label="Username" type="text" placeholder="User" />
			</div>
			<div>
				<InputField aria-label="email" type="email" placeholder="email@provider.com" />
			</div>

			<div>
				<InputField aria-label="password" type="password" placeholder={password.value} />

				<a href="#">Forgot your password?</a>
			</div>
		</form>
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
