import { component$, useStyles$ } from "@builder.io/qwik";
import { type IInputField, styles } from "./input-field.root";

export const InputField = component$<IInputField>(({ ...props }) => {
	useStyles$(styles);


	return <input {...props} class={["input-field"]} />;
});
