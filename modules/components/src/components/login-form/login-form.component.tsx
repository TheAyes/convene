import { $, component$, useStyles$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { createClient, LOGIN_REDIRECT } from "@harmony/shared";
import { formAction$, type InitialValues, type SubmitHandler, useForm, zodForm$ } from "@modular-forms/qwik";

import { InputField } from "../input-field/input-field.component";
import { SLoginForm, styles, type TLoginForm } from "./login-form.root";

export const useLoginFormLoader = routeLoader$<InitialValues<TLoginForm>>(() => ({
	email: "",
	password: ""
}));

export const useFormAction = formAction$<TLoginForm>(async (values, requestEvent) => {
	const client = createClient(requestEvent); // getSupabaseClient(requestEvent);

	const { data: accountData, error: accountError } = await client.auth.signInWithPassword({
		email: values.email,
		password: values.password
	});

	if (accountError) {
		console.error(`${accountError.message}`);
		return;
	}

	console.log("authenticated");

	throw requestEvent.redirect(LOGIN_REDIRECT, "/");
}, zodForm$(SLoginForm));

export const LoginForm = component$(() => {
	useStyles$(styles);

	const [loginForm, { Form, Field, FieldArray }] = useForm<TLoginForm>({
		loader: useLoginFormLoader(),
		validate: zodForm$(SLoginForm),
		action: useFormAction()
	});

	const handleSubmit = $<SubmitHandler<TLoginForm>>((values, event) => {});

	return (
		<Form onSubmit$={handleSubmit} class={["login-form"]}>
			<Field name="email">
				{(field, props) => (
					<label>
						Email
						<InputField {...props} type="email" value={field.value} placeholder="Enter your Email" />
					</label>
				)}
			</Field>
			<Field name="password">
				{(field, props) => (
					<label>
						Password
						<InputField {...props} type="password" value={field.value} placeholder="Enter your password" />
					</label>
				)}
			</Field>
			<InputField type="submit">Login</InputField>
		</Form>
	);
});
