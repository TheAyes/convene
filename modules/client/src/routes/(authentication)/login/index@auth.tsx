import { component$, useStyles$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { LoginForm } from "@harmony/components";
import styles from "./login.scss?inline";

export default component$(() => {
	useStyles$(styles);

	return <LoginForm />;
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
