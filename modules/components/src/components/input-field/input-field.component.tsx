import { component$, Slot, useStyles$ } from "@builder.io/qwik";
import { type IInputField, styles } from "./input-field.root";

export const InputField = component$<IInputField>(({ type, value, importance, placeholder, ...props }) => {
	useStyles$(styles);

	switch (type) {
		case "submit":
		case "button": {
			return (
				<button {...props} class={["input-field", type]}>
					<Slot />
				</button>
			);
		}
	}

	return <input {...props} type={type} value={value} class={["input-field"]} placeholder={placeholder} />;
});
